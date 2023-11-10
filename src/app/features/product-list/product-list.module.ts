import { NgModule } from '@angular/core';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './components/product-list.component';
import { ProductListTableComponent } from './components/product-list-table/product-list-table.component';
import { ProductListTableRowComponent } from './components/product-list-table/product-list-table-row/product-list-table-row.component';
import { ProductListTableComponentA } from './components/product-list-table-a/product-list-table.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListTableComponent,
    ProductListTableRowComponent,
    ProductListTableComponent,
    ProductListTableComponentA,
  ],
  imports: [CommonModule, ProductListRoutingModule, SharedModule],
  providers: [],
})
export class ProductListModule {}
