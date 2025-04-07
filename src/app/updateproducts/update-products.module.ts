import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes=[{
  path:'',
  component:UpdateProductComponent
}]

@NgModule({
  declarations: [
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule

]


  
})
export class UpdateProductsModule { }
