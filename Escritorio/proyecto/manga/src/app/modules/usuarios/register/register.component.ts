import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getLocaleCurrencyCode } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

fgValidator: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }
  
  FormBuilding() {
    this.fgValidator= this.fb.group(
      {
        name: ['', [Validators.required],Validators.minLength(2)],
        last_name:['', [Validators.required],Validators.minLength(2)],
        email:['', [Validators.required],Validators.email],
        pass:['',[Validators.required],Validators.minLength(6)],
        confirm_pass:['',[Validators.required],Validators.minLength(6)],
        cel:['', [Validators.required],Validators.minLength(12), Validators.maxLength(14)],
        country:['', [Validators.required],Validators.minLength(2)],
        city:['', [Validators.required],Validators.minLength(2)],
        date:['', [Validators.required]]
      }
    )
  }
  UserRegisterFn(){
    if(this.fgValidator.invalid){
      alert("Invalid_Form");
      return false;
    }
    alert("Registering...");
    return false;
  }
 get fgv(){
   return this.fgValidator.controls;
 }
}
