import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { SERVER_URL } from 'src/app/api';
import { User } from 'src/app/Interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user : User | null = null;
  constructor( private httpClient:HttpClient) { }

userDetails(){
    if(this.user){
      return of(this.user);
    }else
      return this.httpClient.get<User>(`${SERVER_URL}/user/current-user?role=admin`).pipe(tap(user => {
        this.user = user;
      }));
}
}
