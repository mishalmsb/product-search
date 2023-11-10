import { Injectable } from '@angular/core';
import {
  IProduct,
  IProductResponse,
  IProductSearchResponse,
  IProductWithStock,
  IProductWithStockResponse,
} from '@core/models/product';
import { Observable, Observer, catchError, forkJoin, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StockUtilityService } from '@core/services/utils/stock/stock-utils.service';
import { StockMutationType } from '@core/enums/stock-mutation-type';
import { ErrorhandlerService } from '@core/services/utils/error/error.service';
import { StockService } from '../stock/stock.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(
    private _http: HttpClient,
    private _stockUtilityService: StockUtilityService,
    private _errorhandlerService: ErrorhandlerService,
    private _stockService: StockService
  ) {}

  getProducts(): Observable<IProductSearchResponse> {
    const url: string = '/assets/data/products.json';
    return this._http
      .get<IProductSearchResponse>(url)
      .pipe(
        catchError(
          this._errorhandlerService.handleError<IProductSearchResponse>
        )
      );
  }

  getProductByNumber(number: string): Observable<IProductResponse> {
    return new Observable((observer: Observer<IProductResponse>) => {
      this.getProducts().subscribe({
        next: (response) => {
          const product = response.products.find(
            (p) => p.product_number == number
          );
          if (product) {
            observer.next({
              generationDate: response.generationDate,
              product,
            });
            observer.complete();
            return;
          }
          observer.next({
            generationDate: new Date(),
            error: new HttpErrorResponse({
              error: 'Error getStockInfoByProductNumber',
            }),
            product: {} as IProduct,
          });
          observer.complete();
        },
        error: (error) => {
          observer.next({
            generationDate: new Date(),
            product: {} as IProduct,
            error,
          });
          observer.error('Something went wrong');
          observer.complete();
        },
      });
    });
  }

  getProductsPoputateStock(): Observable<IProductWithStockResponse> {
    return new Observable((observer: Observer<IProductWithStockResponse>) => {
      forkJoin([
        this.getProducts(),
        this._stockService.getAllArticleStock(),
      ]).subscribe({
        next: ([productSearchResponse, articleStockSearchResponse]) => {
          const products: IProductWithStock[] =
            productSearchResponse.products.map((p) => {
              const stock = this._stockUtilityService.getStockByProductNumber(
                p.product_number,
                articleStockSearchResponse.article_stock
              );
              return {
                product_number: p.product_number,
                product_description: p.product_description,
                warehouse_numbers:
                  this._stockUtilityService.getWarehouseNumbersFromStock(stock),
                quantity_in_stock:
                  this._stockUtilityService.calcQuantityInStockFromStockInfo(
                    stock
                  ),
                available_quantity:
                  this._stockUtilityService.calcQuantityInStockFromStockInfo(
                    stock,
                    StockMutationType.STOCK
                  ),
              };
            });
          observer.next({
            generationDate: productSearchResponse.generationDate,
            products,
          });
          observer.complete();
        },
        error: (error) => {
          observer.next({
            generationDate: new Date(),
            products: [],
            error,
          });
          observer.error('Something went wrong');
          observer.complete();
        },
      });
    });
  }
}
