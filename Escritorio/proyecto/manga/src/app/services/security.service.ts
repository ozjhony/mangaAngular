import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../modelos/security/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConfig } from '../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel);


  constructor(private http: HttpClient) { 

    this.verifyCurrentSession();
  }


  UsuarioLogin(user: UserModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}login`, user, {
      headers: new HttpHeaders({})
    });
  }


  setUserData(user: UserModel) {
    this.userData.next(user);
  }

  getUserData() {
    return this.userData.asObservable();
  }

  saveSessionData(sessionData: any): Boolean {
    let currentSession = localStorage.getItem('session');
    if (currentSession) {
      return false;
    } else {
      console.log("Sessión Data")
      console.log(sessionData);

      let data: UserModel = {
        id: sessionData.data.id,
        usuarioId: sessionData.data.usuarioId,
        username: sessionData.data.username,
        role: sessionData.data.role,
        token: sessionData.token,
        isLogged: true
      };
      localStorage.setItem('session', JSON.stringify(data));
      this.setUserData(data);
      return true;
    }
  }

  getSessionData(){
    let currentSession=localStorage.getItem("session");
    return currentSession;
  }

  getToken(): String {
    let sessionData = this.getSessionData();
    let currentSession = '';
    if (sessionData) {
      currentSession = JSON.parse(sessionData).token;
    }
    return currentSession;
  }


  logout(){
    localStorage.removeItem("session");
    this.setUserData(new UserModel());
  }

  verifyCurrentSession() {
    let currentSession = this.getSessionData();
    if (currentSession) {
      this.setUserData(JSON.parse(currentSession));
    }
  }
}
