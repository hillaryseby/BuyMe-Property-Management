import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthServiceService,
              private router : Router
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    let loginCredentials = this.form?.value;

    let userCred = {
      userName: loginCredentials.userName,
      password: loginCredentials.password,
    } as userDetails;
    
    if(this.authService.authUser(userCred)){
      this.router.navigate([Navroutes.buyProperty]);
    }
  }
}

export interface userDetails {
  userName: string;
  password: string;
}
