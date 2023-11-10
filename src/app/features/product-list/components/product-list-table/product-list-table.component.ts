import { Component } from '@angular/core';
import { IProductSearchResponse } from '@core/models/product';
import { IArticleStockSearchResponse } from '@core/models/stock';
import { ProductsService } from '@core/services/api/products/products.service';
import { StockService } from '@core/services/api/stock/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss'],
})
export class ProductListTableComponent {
  products$!: Observable<IProductSearchResponse>;
  stock$!: Observable<IArticleStockSearchResponse>;

  constructor(
    private _productsService: ProductsService,
    private _stockService: StockService
  ) {
    this.products$ = this._productsService.getProducts();
    this.stock$ = this._stockService.getAllArticleStock();
  }
}
