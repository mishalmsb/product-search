import { Injectable } from '@angular/core';
import { IArticleStock, IStockInfo, IStockMutation } from '@core/models/stock';
import { StockMutationType } from '@core/enums/stock-mutation-type';

@Injectable({
  providedIn: 'root',
})
export class StockUtilityService {
  getStockByProductNumber(
    productId: string,
    article_stock: IArticleStock[]
  ): IStockInfo[] {
    const stock: IArticleStock | undefined = article_stock.find(
      (as) => as.product_number == productId
    );
    if (!stock) return [];
    return stock.stock_info;
  }

  getWarehouseNumbersFromStock(article_stock: IStockInfo[]): string[] {
    return article_stock.map((value) => value.warehouse_number);
  }

  getStockMutationsFromStockInfo(stockInfo: IStockInfo[]): IStockMutation[] {
    return stockInfo.map((value) => value.stock_mutations).flat(1);
  }

  calcQuantityInStockFromMutations(
    stock_mutations: IStockMutation[],
    type?: StockMutationType
  ): number {
    return stock_mutations.reduce((accumulator, mutaion) => {
      if (type && mutaion.type != type) {
        return accumulator;
      }
      return accumulator + parseInt(mutaion.quantity);
    }, 0);
  }

  calcQuantityInStockFromStockInfo(
    stockInfo: IStockInfo[],
    type?: StockMutationType
  ): number {
    const allMutations = this.getStockMutationsFromStockInfo(stockInfo);
    return this.calcQuantityInStockFromMutations(allMutations, type);
  }
}
