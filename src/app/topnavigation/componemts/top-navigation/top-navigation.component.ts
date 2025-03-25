import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Interface/items';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  count : Item[]= []
  @Output() toggle = new EventEmitter()

  toggleNav(){
    this.toggle.emit()
  }
    constructor( private cartService:CartService){
      
    }
  ngOnInit(): void {
    this.countValue()
  }


   countValue(){
        this.count = this.cartService.getCartItems()
   }

}
