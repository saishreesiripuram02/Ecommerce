import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchModule } from '../search/search.module';
import { ProductModule } from '../product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
    {
      path:"",
      component:ProductListComponent

    }
   ]

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    ProductModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductListModule { }
