import { Injectable } from '@angular/core';
import { Item } from '../Interface/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems :Item[]=[]

   addtoCart(eachitem:Item){
    this.cartItems.push(eachitem)
   }

  getCartItems(){
     return this.cartItems;
  }

}
