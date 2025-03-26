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

    this.cartItems.forEach( product => {

      if(product.id && itemsMapById.has(product.id)){
          let value = itemsMapById.get(product.id);
          if(value){
            value.quantity++;
            itemsMapById.set(product.id, value);            
          }
      }else if(product.id){
        itemsMapById.set(product.id, {quantity:1, item:product})
      }

    });

    return Array.from(itemsMapById.values());
  }

  getCartValue(){

    let cartItems  = new Map< number, CartItem>()
    this.cartItems.forEach( product => {
      if(product.id){
      const existingProduct = cartItems.get(product.id)
      if(existingProduct){
        existingProduct.quantity++
      }
 else{
  cartItems.set(product.id, { quantity : 1, item:product})
    }
      }
    })
    return Array.from(cartItems.values());
  }


}
