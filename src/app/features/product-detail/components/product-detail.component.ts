import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockMutationType } from '@core/enums/stock-mutation-type';
import { IProductResponse } from '@core/models/product';
import { IArticleStockResponse } from '@core/models/stock';
import { ProductsService } from '@core/services/api/products/products.service';
import { StockService } from '@core/services/api/stock/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  productData$!: Observable<IProductResponse>;
  stockData$!: Observable<IArticleStockResponse>;
  mutatioTypes = StockMutationType;

  // TODO: explore inject vs Constructor
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _stockService: StockService = inject(StockService);
  private _productsService: ProductsService = inject(ProductsService);
  // constructor(
  //   private _productsService: ProductsService,
  //   private _route: ActivatedRoute
  // ) {}

  ngOnInit() {
    const productNumber = this._route.snapshot.params['id'];
    this.productData$ = this._productsService.getProductByNumber(productNumber);
    this.stockData$ =
      this._stockService.getStockInfoByProductNumber(productNumber);
  }
}
