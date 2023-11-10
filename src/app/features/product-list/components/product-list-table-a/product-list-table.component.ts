import { Component } from '@angular/core';
import { IProductWithStockResponse } from '@core/models/product';
import { ProductsService } from '@core/services/api/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-table-a',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss'],
})
export class ProductListTableComponentA {
  data$!: Observable<IProductWithStockResponse>;

  constructor(private _productsService: ProductsService) {
    this.data$ = this._productsService.getProductsPoputateStock();
  }
}
