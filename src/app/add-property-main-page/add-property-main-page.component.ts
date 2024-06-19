import { Component, OnInit } from '@angular/core';
import { AddPropertyFormValueProp } from '../add-property/add-property.component';

@Component({
  selector: 'app-add-property-main-page',
  templateUrl: './add-property-main-page.component.html',
  styleUrls: ['./add-property-main-page.component.scss']
})
export class AddPropertyMainPageComponent implements OnInit {
  activeIndex : number =0;
  nextPressed : boolean = false;
  basicPropertyDetails : AddPropertyFormValueProp = null

constructor(){}

  ngOnInit(): void {
   
  }

jumpToNextIndex(){
  this.activeIndex +=1;
  this.nextPressed = !this.nextPressed;
}

goToPrevious(){
  this.activeIndex -=1;
}

propertyBasicDetailsAdded($event : AddPropertyFormValueProp){
  this.basicPropertyDetails = $event;
}


}
