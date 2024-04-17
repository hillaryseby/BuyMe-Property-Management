import { Component, OnInit } from '@angular/core';
import {
  PropertyInterface,
  PropertyListServiceService,
} from '../services/property-list-service.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Navroutes } from '../constants/navroutes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit {
  propertyListingsRent: PropertyInterface[] = [];

  constructor(
    private propertyService: PropertyListServiceService,
    private http: HttpClient,
    private route: Router
  ) {}
  async ngOnInit() {
    this.propertyService.getProperty().subscribe((data)=>{
      data.forEach((data)=>{ 
        if(data.isRent){
          this.propertyListingsRent.push(data);
        }
      })
    })
  }

  navigateToDetails(id : any) {
    this.route.navigate([Navroutes.propertyDetail, {'id' :id}]);
  }
}
