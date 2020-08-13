import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MangaModel } from '../modelos/parameters/manga.model';
import { ServiceConfig } from '../config/service-config';
import { CapituloModel } from '../modelos/parameters/capitulos.model';
@Injectable({
  providedIn: 'root'
})
export class CapituloService {

  entity = 'capitulo';
  token: String = '';
  constructor(private http: HttpClient, private securityService: SecurityService) { 
    this.token = this.securityService.getToken();
  }

  getAllRecords(): Observable<CapituloModel[]> {
    return this.http.get<CapituloModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(id: String): Observable<CapituloModel> {
    return this.http.get<CapituloModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }

  saveNewRecord(record: CapituloModel): Observable<CapituloModel> {
    return this.http.post<CapituloModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  EditRecord(record: MangaModel): Observable<MangaModel> {
    return this.http.put<MangaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
