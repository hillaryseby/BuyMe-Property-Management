import { Injectable } from '@angular/core';
import { userDetails } from '../login-page/login-page.component';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  authUser(user: userDetails) : boolean {
    let userArray;
    if (localStorage.getItem('user')) {
     userArray = JSON.parse(localStorage.getItem('user'));
    }

     return (userArray.userName ===user.userName && userArray.password === user.password) 
  
  }
}
