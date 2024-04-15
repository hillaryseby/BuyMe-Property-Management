import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  private propertyId :number | undefined;

constructor(private route :ActivatedRoute){}

ngOnInit(): void {
   this.route.snapshot.params['id'];
}

}
