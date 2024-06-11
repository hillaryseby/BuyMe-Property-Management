import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';
import { AuthServiceService } from '../services/auth-service.service';
import { UntypedFormBuilder } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeToBuyProperty : string = Navroutes.buyProperty;
  items: MenuItem[] | undefined;
constructor(private route :Router,
            private authService :AuthServiceService,
            private messageService : MessageService
){}

ngOnInit(): void {
  this.items = [
    {
      label : this.UserName
    },
    {
        label : "Profile",
        icon : "pi pi-user"
    },
    {
      label: "Account Settings",
      icon : "pi pi-crown"
    },
    {
      label : "Logout",
      icon : "pi pi-sign-out",
      command :  () => {
        this.redirectToLogin("logout");
      } 
    }
];
}
onRegister(){
  this.route.navigate([Navroutes.userRegistration])
}

get UserName() {
  if(localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')).userName;
  }
}

async redirectToLogin(action:string){
  if(action === "login"){
    this.route.navigate([Navroutes.loginPage]);
  }
  else{
   await this.authService.isLoggedOut();
   this.messageService.add({severity : 'success', detail : 'Logged Out Successfully'})
   setTimeout(()=>{
    this.route.navigate([Navroutes.loginPage]);
   },2000)
  
  }
  
}

navigateToBuyProperty(){
  this.route.navigate([Navroutes.buyProperty]);
}

navigateToAddProperty(){
  this.route.navigate([Navroutes.addProperty]);
}

isLoggedIn() : boolean{
  return this.authService.isLoggedIn() !== null ? true : false;

}

 
}

export interface DropDownOptions {
  option : string,
  icon : string
};
