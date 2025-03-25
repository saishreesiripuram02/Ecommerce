import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import("./product-list/product-list.module").then(mod => mod.ProductListModule)
  },
{
  path:"add-product",
  loadChildren:()=>import("./addproduct/addproduct.module").then(mod => mod.AddproductModule)
}

  ,
  { 
    path:"",
    redirectTo:"/home",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
