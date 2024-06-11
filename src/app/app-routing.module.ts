import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navroutes } from './constants/navroutes';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { BareBoneRegistrationComponent } from './bare-bone-registration/bare-bone-registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { AddPropertyMainPageComponent } from './add-property-main-page/add-property-main-page.component';

const routes: Routes = [
  { 
    path: '', component: PropertyListComponent 
  },
  { 
    path: Navroutes.addProperty, component: AddPropertyMainPageComponent 
  },
  { 
    path: 'PropertyDetail/:id', component: PropertyDetailsComponent 
  },
  {
    path :Navroutes.userRegistration ,component :BareBoneRegistrationComponent
  },
  
  {
    path :Navroutes.loginPage , component :LoginPageComponent
  },
  {
    path : Navroutes.buyProperty , component : PropertyCardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
