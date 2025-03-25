import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './componemts/top-navigation/top-navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    TopNavigationComponent
  ]
})
export class TopnavigationModule { }
