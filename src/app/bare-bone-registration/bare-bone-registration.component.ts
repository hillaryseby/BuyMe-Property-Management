import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Validation } from '../constants/validators';

@Component({
  selector: 'app-bare-bone-registration',
  templateUrl: './bare-bone-registration.component.html',
  styleUrls: ['./bare-bone-registration.component.scss'],
})
export class BareBoneRegistrationComponent implements OnInit {
  registrationForm: FormGroup | undefined | null;
  isPasswordEqual :boolean = false;

  formValidationMessages = [
    {
      firstName: [
        { type: 'required', message: 'first Name is required' }
      ],
    },
    {
      lastName: [
        { type: 'required', message: 'last Name is required' }
      ],
    },
    {
      email:[
        {type:'required',message:"Email is required"},
        {type:'pattern',message:'please check the email you entered'}
      ]
    },
    {
      mobile:[
        { type:'required',message:'Mobile number is required'},
      ]
    }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName : new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(Validation.emailRegex),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(Validation.passwordRegex),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(Validation.passwordRegex),
      ]),
      mobile: new FormControl('', [Validators.required,Validators.maxLength(Validation.mobileMaxLength)]),
    }, this.passwordValidator);
  }

  passwordValidator = (control :AbstractControl) :{[key :string] : boolean} =>{
    const password= control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if(password?.value !== confirmPassword?.value){
      return {mismatched :true}
    }
   return {mismatched :false}
  }
  onSubmit() {
    let value = this.registrationForm?.value;
    localStorage.setItem("user", JSON.stringify(value));
  }
}
