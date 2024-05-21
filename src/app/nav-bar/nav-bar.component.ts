import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';
import { AuthServiceService } from '../services/auth-service.service';
import { UntypedFormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeToBuyProperty : string = Navroutes.buyProperty;
  items: MenuItem[] | undefined;
constructor(private route :Router,
            private authService :AuthServiceService
){}

ngOnInit(): void {
  this.items = [
    {
        label : "Profile",
        icon : "pi pi-user"
    },
    {
      label: "Account Settings",
      icon : "pi pi-crown"
    }
];
}
onRegister(){
  this.route.navigate([Navroutes.userRegistration])
}

async redirectToLogin(action:string){
  if(action === "login"){
    this.route.navigate([Navroutes.loginPage]);
  }
  else{
   await this.authService.isLoggedOut();
   this.route.navigate([Navroutes.loginPage]);
  }
  
}

navigateToBuyProperty(){
  this.route.navigate([Navroutes.buyProperty]);
}

isLoggedIn() : boolean{
  return this.authService.isLoggedIn() !== null ? true : false;

}

 
}

export interface DropDownOptions {
  option : string,
  icon : string
};
