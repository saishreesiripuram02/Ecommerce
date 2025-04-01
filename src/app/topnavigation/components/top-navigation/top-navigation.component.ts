import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/Interface/items';
import { User } from 'src/app/Interface/user.model';
import { CartService } from 'src/app/Services/cart.service';
import { ItemService } from 'src/app/Services/item.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  count : Item[]= [];
  user!:User;

  @Output() toggle = new EventEmitter()

  toggleNav(){
    this.toggle.emit()
  }
    constructor( private cartService:CartService,
                private itemService:ItemService,
                public dialog: MatDialog
    ){
      
    }
  ngOnInit(): void {
    this.countValue()
    this.gettingUserDetails()
  }


   countValue(){
        this.count = this.cartService.getCartItems()
   }
     gettingUserDetails(){
      
     this.itemService.userDetails().subscribe( user =>{
      this.user = user
      console.log(user)
     })
   }
   

   openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
     this.dialog.open(UserDetailsComponent, {
       width: '250px',
       enterAnimationDuration,
       exitAnimationDuration,
     });
   }
 }


