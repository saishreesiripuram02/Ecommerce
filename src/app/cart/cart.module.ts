import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Component/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';


const routes:Routes= [{
  path:"",
  component:CartComponent
}]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class CartModule { }
