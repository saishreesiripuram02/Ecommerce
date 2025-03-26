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

  cartQuantities : CartItem[] = [];

  constructor(private cartService : CartService){

  }

  ngOnInit(){
    this.cartQuantities =  this.cartService.getCartGroupByQuantity();

    console.log(this.cartQuantities)
  }
  getTotalCost() {
    return this.cartQuantities.reduce((acc, cartItem) => acc + cartItem.item.price, 0);
  }

  getALL(){
    return this.cartQuantities.reduce((acc, cartItem) => acc + (cartItem.item.price * cartItem.quantity), 0);

}
}