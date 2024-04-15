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
  propertyListings: PropertyInterface[] = [];

  constructor(
    private propertyService: PropertyListServiceService,
    private http: HttpClient,
    private route: Router
  ) {}
  async ngOnInit() {
    this.http
      .get<PropertyInterface[]>('../../assets/data.json')
      .subscribe((data) => {
        this.propertyListings = data;
      });
  }

  navigateToDetails(id : number) {
    console.log(id);
   this.route.navigate([Navroutes.propertyDetail])
  }
}
