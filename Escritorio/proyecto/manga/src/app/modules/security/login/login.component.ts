import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

fgValidator: FormGroup;

  constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.FormBuilding();
    }
    FormBuilding() {
      this.fgValidator= this.fb.group(
        {
          email:['', [Validators.required],Validators.email],
          pass:['',[Validators.required],Validators.minLength(6)]
          
        }
      )
    }
    UserLoginfn(){
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
