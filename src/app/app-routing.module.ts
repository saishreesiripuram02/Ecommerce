import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./product-list/product-list.module").then(mod => mod.ProductListModule)
  },
  {
    path: "product",
    children: [
      {
        path: "add",
        loadChildren: () => import("./addproduct/addproduct.module").then(mod => mod.AddproductModule)
      },
      {
        path: "update/:id",
       loadChildren: ()=> import('./updateproducts/update-products.module').then(mod => mod.UpdateProductsModule)
      },
      {
        path: "details/:id",
        component: ItemDetailsComponent
      }
    ]
  },
 
  {
    path: "cart",
    loadChildren: () => import("./cart/cart.module").then(mod => mod.CartModule)
  },

  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "**",
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
