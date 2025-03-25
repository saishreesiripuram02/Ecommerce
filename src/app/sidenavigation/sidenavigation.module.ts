import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './Components/side-navigation/side-navigation.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    SideNavigationComponent
  ]
})
export class SidenavigationModule { }
