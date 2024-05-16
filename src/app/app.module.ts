import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { BareBoneRegistrationComponent } from './bare-bone-registration/bare-bone-registration.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    BareBoneRegistrationComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
