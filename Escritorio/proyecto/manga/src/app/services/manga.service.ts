import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service-config';
import { SecurityService } from './security.service';
import {MangaModel} from '../modelos/parameters/manga.model';
//import { MangaModel } from '../../modelos/parameters/MangaModel';


@Injectable({
  providedIn: 'root'
})
export class MangaService {
  entity = 'manga';
  token: String = '';

  constructor(private http: HttpClient, private securityService: SecurityService) { 
    this.token = this.securityService.getToken();
  }

  getAllRecords(): Observable<MangaModel[]> {
    return this.http.get<MangaModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(id: String): Observable<MangaModel> {
    return this.http.get<MangaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }

  saveNewRecord(record: MangaModel): Observable<MangaModel> {
    return this.http.post<MangaModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json',
        //'Authorization': `Bearer ${this.token}`
      })
    });
  }

  EditRecord(record: MangaModel): Observable<MangaModel> {
    return this.http.put<MangaModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id}`, record, {
      headers: new HttpHeaders({
       // Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
       // Authorization: `Bearer ${this.token}`
      })
    });
  }
}
