import { Component } from '@angular/core';
import { User } from 'src/app/Interface/user.model';
import { UserService } from 'src/app/Services/user-service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponents {
     user!: User;
    loading = true;
  
    constructor(private  userService: UserService
    ) {}
    
    ngOnInit(): void {
      this.gettingUserDetails()
    }
  
    gettingUserDetails() {
      this.loading = true
      this.userService.userDetails().subscribe(user => {
        this.user = user
        this.loading = false;

        console.log(user)
      })
    }
  

}
