import { Component, Input } from '@angular/core';
import { Item } from 'src/app/Interface/items';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() singleItem !: Item

  constructor( private cartService: CartService){}

  addToCart(){
        this.cartService.addtoCart(this.singleItem)
  }

}
