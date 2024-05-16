import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  routeToBuyProperty : string = Navroutes.buyProperty;
constructor(private route :Router){}

onRegister(){
  this.route.navigate([Navroutes.userRegistration])
}

redirectToLogin(){
  this.route.navigate([Navroutes.loginPage]);
}

navigateToBuyProperty(){
  this.route.navigate([Navroutes.buyProperty]);
}
}
