import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './Compoent/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
