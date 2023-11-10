import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';
import { ProductDetailModule } from '@features/product-detail/product-detail.module';
import { ProductListModule } from '@features/product-list/product-list.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@features/product-list/product-list.module').then(
            (m): typeof ProductListModule => m.ProductListModule
          ),
      },
      {
        path: 'product/:id',
        loadChildren: () =>
          import('@features/product-detail/product-detail.module').then(
            (m): typeof ProductDetailModule => m.ProductDetailModule
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
