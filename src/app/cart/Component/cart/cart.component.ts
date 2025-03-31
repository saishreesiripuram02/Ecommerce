import { Component } from '@angular/core';
import { CartItem } from 'src/app/Interface/cart-item';
import { Item } from 'src/app/Interface/items';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  displayedColumns = ['name', 'quantity', 'cost', 'totalCost'];
  cartItems : CartItem[] = [];

  constructor(private cartService : CartService){}

  ngOnInit(){
    this.cartItems =  this.cartService.getCartValue();
  }
  getALL(){
    return this.cartItems.reduce((acc, cartItem) => acc + (cartItem.item.price * cartItem.quantity), 0);
  }
 
  onClick(val:any){
     console.log(val)
  }
}