import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getLocaleCurrencyCode } from '@angular/common';
import {UsuarioService} from '../../../services/usuario.service';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import {Router} from '@angular/router'

declare const showMessage: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

fgValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private service: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }
  
  FormBuilding() {
    this.fgValidator= this.fb.group(
      {
        //username:['',[Validators.required]],
        nombre: ['', [Validators.required]],
        email:['', [Validators.required,Validators.email]],
        celular:['', [Validators.required,Validators.minLength(5), Validators.maxLength(14)]],
        pais:['', [Validators.required,Validators.minLength(2)]],
        ciudad:['', [Validators.required,Validators.minLength(2)]]
      }
    )
  }
  UserRegisterFn(){
    if(this.fgValidator.invalid){
      alert("Invalid_Form");
      return false;
    }
    else{
      let model = this.getUsuarioData();
      this.service.UsuarioRegistering(model).subscribe(
        data => {
          showMessage("Register succesfully, you can find your password in your email inbox.");
          this.router.navigate(['/security/login']);
        },
        error => {
          showMessage("Error registering.");
        }
      );
    }
  }



  getUsuarioData(): UsuarioModel {
    let model = new UsuarioModel();
    //model.username=this.fgv.username.value;
    model.nombre = this.fgv.nombre.value;
    model.celular=this.fgv.celular.value;
    model.ciudad=this.fgv.ciudad.value;
    model.email=this.fgv.email.value;
    model.pais=this.fgv.pais.value;
    

    return model;
  }

 get fgv(){
   return this.fgValidator.controls;
 }
}
