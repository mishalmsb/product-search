import { StockMutationType } from '@core/enums/stock-mutation-type';
import { IBaseProduct } from './product';
import { ISearchResponse } from './response';

export interface IStockMutation {
  type: StockMutationType;
  quantity: string;
}

export interface IStockInfo {
  warehouse_number: string;
  stock_mutations: IStockMutation[];
}

export interface IArticleStock extends IBaseProduct {
  stock_info: IStockInfo[];
}

export interface IArticleStockSearchResponse extends ISearchResponse {
  article_stock: IArticleStock[];
}

export interface IArticleStockResponse extends IArticleStock, ISearchResponse {}
