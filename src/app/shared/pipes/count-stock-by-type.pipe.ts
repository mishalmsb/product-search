import { Pipe, PipeTransform } from '@angular/core';
import { StockMutationType } from '@core/enums/stock-mutation-type';
import { IStockMutation } from '@core/models/stock';
import { StockUtilityService } from '@core/services/utils/stock/stock-utils.service';

@Pipe({
  name: 'countStockByType',
})
export class CountStockByTypePipe implements PipeTransform {
  constructor(private _stockUtilityService: StockUtilityService) {}

  transform(
    stockMutations: IStockMutation[],
    type?: StockMutationType
  ): number {
    return this._stockUtilityService.calcQuantityInStockFromMutations(
      stockMutations,
      type
    );
  }
}
