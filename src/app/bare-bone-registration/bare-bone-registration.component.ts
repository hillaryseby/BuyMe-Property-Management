import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../constants/validators';

@Component({
  selector: 'app-bare-bone-registration',
  templateUrl: './bare-bone-registration.component.html',
  styleUrls: ['./bare-bone-registration.component.scss']
})
export class BareBoneRegistrationComponent implements OnInit {
  registrationForm: FormGroup |undefined |null;
  constructor(private fb :FormBuilder){}
  
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registrationForm = new FormGroup({
      firstName : new FormControl('' , [Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required , Validators.pattern(Validation.emailRegex)]),
      password : new FormControl('',[Validators.required,Validators.pattern(Validation.passwordRegex)]),
      mobile : new FormControl('',[Validators.required])
    })
  }

}
