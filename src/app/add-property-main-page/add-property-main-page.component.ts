import { Component } from '@angular/core';

@Component({
  selector: 'app-add-property-main-page',
  templateUrl: './add-property-main-page.component.html',
  styleUrls: ['./add-property-main-page.component.scss']
})
export class AddPropertyMainPageComponent {
  activeIndex : number =0;
constructor(){}

jumpToNextIndex(){
  this.activeIndex +=1;
}

goToPrevious(){
  this.activeIndex -=1;
}
}
