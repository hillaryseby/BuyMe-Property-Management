import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
constructor(private route :Router){}
onRegister(){
  this.route.navigate([Navroutes.userRegistration])
}
}
