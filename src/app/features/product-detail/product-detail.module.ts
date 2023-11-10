import { NgModule } from '@angular/core';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail.component';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, SharedModule],
  providers: [],
})
export class ProductDetailModule {}
