import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserdetailsModule } from '../userdetails/userdetails.module';





@NgModule({
  declarations: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    UserdetailsModule
  ],
  exports:[
    TopNavigationComponent
  ]
})
export class TopnavigationModule { }
