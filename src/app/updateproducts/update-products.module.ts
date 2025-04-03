import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';

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
    MatInputModule

]


  
})
export class UpdateProductsModule { }
