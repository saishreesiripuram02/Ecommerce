import { Injectable } from '@angular/core';
import { Item } from '../Interface/items';
import { CartItem } from '../Interface/cart-item';

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
  

  getCartGroupByQuantity(){

    const itemsMapById = new Map<number, CartItem>();

this.cartItems.forEach(product => {
  if (product.id) {
    const existingProduct = itemsMapById.get(product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      itemsMapById.set(product.id, {
        quantity: 1, item: product
       
      });
    }
  }
});

return Array.from(itemsMapById.values());

  }



}
