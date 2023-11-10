import { Component, Input } from '@angular/core';
import { StockMutationType } from '@core/enums/stock-mutation-type';
import { IProduct } from '@core/models/product';
import { IArticleStock, IStockInfo } from '@core/models/stock';
import { StockUtilityService } from '@core/services/utils/stock/stock-utils.service';

@Component({
  selector: '[app-product-list-table-row]',
  templateUrl: './product-list-table-row.component.html',
  styleUrls: ['./product-list-table-row.component.scss'],
})
export class ProductListTableRowComponent {
  @Input() product!: IProduct;
  @Input() allArticlesStock: IArticleStock[] = [];
  currentProcustStock!: IStockInfo[];

  constructor(private _stockUtilityService: StockUtilityService) {}

  ngOnInit() {
    this.setCurrentProcustStock();
  }

  setCurrentProcustStock() {
    this.currentProcustStock =
      this._stockUtilityService.getStockByProductNumber(
        this.product.product_number,
        this.allArticlesStock
      );
  }

  get warehouseNumbers(): string[] {
    return this._stockUtilityService.getWarehouseNumbersFromStock(
      this.currentProcustStock
    );
  }

  get quantityInStock(): number {
    return this._stockUtilityService.calcQuantityInStockFromStockInfo(
      this.currentProcustStock
    );
  }

  get availableQuantity(): number {
    return this._stockUtilityService.calcQuantityInStockFromStockInfo(
      this.currentProcustStock,
      StockMutationType.STOCK
    );
  }
}
