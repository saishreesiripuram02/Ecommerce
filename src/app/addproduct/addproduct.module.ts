import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './Component/addProduct/add-product.component';
import {  RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../Services/user-service/user.service';
import { map } from 'rxjs';


const routes : Routes = [{
  path :"",
  component: AddProductComponent,
  canDeactivate : [ (component: AddProductComponent) => component.canExit()],
  canActivate: [ () => {

    let userService = inject(UserService);

    console.log(userService)
    return userService.userDetails().pipe(map(user => user.role === 'Admin'))
  }]
}]



@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
    
  ]
})
export class AddproductModule { }
