import { Injectable } from '@angular/core';
import {UsuarioModel} from '../modelos/usuario.model';
import {ServiceConfig}from '../config/service-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  entity:'usuario'

  constructor(private http:HttpClient) { 
    
  }

  UsuarioRegistering(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}`, usuario, {
      headers: new HttpHeaders({})
    });
  }
}
