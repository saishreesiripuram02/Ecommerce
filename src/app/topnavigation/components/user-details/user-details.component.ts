import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interface/user.model';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!:User ;
  loading = true;

  constructor( private itemService:ItemService){}
  ngOnInit(): void {
    this.gettingUserDetails()  }

  gettingUserDetails(){
    this.loading = true
     this.itemService.userDetails().subscribe( user => {
      this.user = user
      this.loading = false; 
     })
  }

}
