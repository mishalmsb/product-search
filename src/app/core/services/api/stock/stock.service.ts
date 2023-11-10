import { Injectable } from '@angular/core';
import { Observable, Observer, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  IArticleStock,
  IArticleStockResponse,
  IArticleStockSearchResponse,
} from '@core/models/stock';
import { ErrorhandlerService } from '@core/services/utils/error/error.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  public constructor(
    private _http: HttpClient,
    private _errorhandlerService: ErrorhandlerService
  ) {}
  getAllArticleStock(): Observable<IArticleStockSearchResponse> {
    const url: string = '/assets/data/stock.json';
    return this._http
      .get<IArticleStockSearchResponse>(url)
      .pipe(
        catchError(
          this._errorhandlerService.handleError<IArticleStockSearchResponse>
        )
      );
  }

  getStockInfoByProductNumber(
    number: string
  ): Observable<IArticleStockResponse> {
    return new Observable((observer: Observer<IArticleStockResponse>) => {
      this.getAllArticleStock().subscribe({
        next: (response) => {
          const stock = response.article_stock.find(
            (p) => p.product_number == number
          );
          if (stock) {
            observer.next({
              generationDate: response.generationDate,
              ...stock,
            });
            observer.complete();
            return;
          }

          observer.next({
            generationDate: new Date(),
            error: new HttpErrorResponse({
              error: 'Error getStockInfoByProductNumber',
            }),
            ...({} as IArticleStock),
          });
          observer.complete();
        },
        error: (error) => {
          observer.next({
            generationDate: new Date(),
            ...({} as IArticleStock),
            error,
          });
          observer.error('Something went wrong');
          observer.complete();
        },
      });
    });
  }
}
