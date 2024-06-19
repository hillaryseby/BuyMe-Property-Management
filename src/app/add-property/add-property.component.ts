import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  propertyTypes: string[] = [];
  listingType: string[] = [];
  addPropertyForm: FormGroup;
  addPropertyDto : AddPropertyFormValueProp = {} as AddPropertyFormValueProp;
  @Output() valueEmit = new EventEmitter<AddPropertyFormValueProp>();
  @Input() nextPage: boolean;

  constructor() {}

  ngOnInit(): void {
    this.propertyTypes = ['Apartment', 'House', 'Studio'];
    this.listingType = ['Sell', 'Rent'];
    this.createForm();
  }

  createForm() {
    this.addPropertyForm = new FormGroup({
      propertyName: new FormControl('', Validators.required),
      buildingTypes: new FormControl('', Validators.required),
      listingTypeName: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
    this.addPropertyForm.valueChanges.subscribe((e) => {
      this.addPropertyDto.propertyName = e.propertyName;
      this.addPropertyDto.buildingType = e.buildingTypes;
      this.addPropertyDto.listingTypeName = e.listingTypeName;
      this.addPropertyDto.price = e.price;
    });
  }

  onPropertyAdd() {
    this.valueEmit.emit(this.addPropertyDto)
  }
}

export interface AddPropertyFormValueProp {
  propertyName: string;
  buildingType: string;
  listingTypeName: string;
  price: number;
}
