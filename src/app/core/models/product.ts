import { ISearchResponse } from './response';

export interface IBaseProduct {
  product_number: string;
}

export interface IProduct extends IBaseProduct {
  product_description: string;
}

export interface IProductSearchResponse extends ISearchResponse {
  products: IProduct[];
}

export interface IProductWithStock extends IProduct {
  warehouse_numbers: string[];
  quantity_in_stock: number;
  available_quantity: number;
}

export interface IProductWithStockResponse extends ISearchResponse {
  products: IProductWithStock[];
}

export interface IProductResponse extends ISearchResponse {
  product: IProduct;
}
