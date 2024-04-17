import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Navroutes } from '../constants/navroutes';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  private propertyId :number =0;

constructor(private route :ActivatedRoute,
  private router :Router
){}

ngOnInit() {
  //this.propertyId = +this.route.snapshot.params['id'];
this.route.params.subscribe((data)=>{
  this.propertyId = +data['id'];
  console.log(this.route.snapshot.url.toString())
})
}

onNextPageNavigation(){
  this.propertyId +=1;
  this.router.navigate([Navroutes.propertyDetail , {'id' : this.propertyId}])
}
}