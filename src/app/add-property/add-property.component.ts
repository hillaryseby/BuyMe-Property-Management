import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  propertyTypes : string[] = [];
  listingType : string[] = [];
  constructor(){}

  ngOnInit(): void {
      this.propertyTypes = [
        "Apartment", "House","Studio"
      ]
      this.listingType = [
        "Sell", "Rent"
      ]
  }
}
