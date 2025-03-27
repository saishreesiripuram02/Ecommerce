import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavigationModule } from './sidenavigation/sidenavigation.module';
import { TopnavigationModule } from './topnavigation/topnavigation.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateProductComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SidenavigationModule,
    TopnavigationModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
