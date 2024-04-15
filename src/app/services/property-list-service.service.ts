import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyListServiceService {

  propertyListing : PropertyInterface[] = [
    {
      id :1,
      type : "house",
      price : 25000,
      imagesrc : "../../assets/images/download-23.webp"
    } ,
    {
      id :2,
      type :"apartment",
      price :30000,
      imagesrc : "../../assets/images/download-23.webp"
    },
    {
      id :3,
      type :"apartment",
      price :30000,
      imagesrc : "../../assets/images/download-23.webp"
    },
    {
      id :4,
      type :"apartment",
      price :30000,
      imagesrc : "../../assets/images/download-23.webp"
    },
    {
      id :5,
      type :"apartment",
      price :30000,
      imagesrc : "../../assets/images/download-23.webp"
    }
  ];

  public getAllProperties() : PropertyInterface[]{
    return this.propertyListing;
  }
  constructor() { }
}

 export interface PropertyInterface {
  id : number ;
  type :string;
  price :number;
  imagesrc : string;
}
