import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyListServiceService {
propertyList :PropertyInterface[] = [];
constructor(private http :HttpClient){}

public getProperty(): Observable<PropertyInterface[]> {
  return this.http.get<PropertyInterface[]>('../../assets/data.json');
}
}

 export interface PropertyInterface {
  id : number ;
  type :string;
  price :number;
  imagesrc : string;
  isRent :boolean
}
