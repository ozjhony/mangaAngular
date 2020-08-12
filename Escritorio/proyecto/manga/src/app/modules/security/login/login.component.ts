import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsConfig} from '../../../config/forms-config';
import {SecurityService} from '../../../services/security.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../modelos/security/user.model';
import MD5 from 'crypto-js/md5';

declare const showMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

fgValidator: FormGroup;
usernameMinLength = FormsConfig.DOCUMENT_MIN_LENGTH;

  constructor(private fb: FormBuilder,
    private service: SecurityService,
    private router: Router) { }

    ngOnInit(): void {
      this.FormBuilding();
      
    }
    FormBuilding() {
      this.fgValidator= this.fb.group(
        {
          username: ['', [Validators.required, Validators.minLength(this.usernameMinLength)]],
          password:['',[Validators.required,Validators.minLength(4)]]
          
        }
      )
    }
   
    UserLoginFn() {
      if (this.fgValidator.invalid) {
        console.log("invalid form");
        showMessage("Invalid form.");
      } else {
        //showMessage("Registering...");
        let model = this.getLoginData();
        console.log(model);
        this.service.UsuarioLogin(model).subscribe(
          data => {
            console.log(data);
            this.service.saveSessionData(data);
            showMessage("Welcome to your account.");
            this.router.navigate(['/home']);
          },
          error => {
            console.log("invalid form");
            showMessage("Invalid data.");
          }
        );
      }
    }

    getLoginData(): UserModel {
      let model = new UserModel();
      model.username = this.fgv.username.value;
      model.password = MD5(this.fgv.password.value).toString();
     // model.password = this.fgv.password.value.toString();
      return model;
    }

   get fgv(){
     return this.fgValidator.controls;
   }
}
