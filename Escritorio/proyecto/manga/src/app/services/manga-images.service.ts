import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';
import {MangaImageModel } from '../modelos/parameters/manga-image.model';
import { ServiceConfig } from '../config/service-config';
import {UploadImageModel} from '../modelos/parameters/upload-image.model'

@Injectable({
  providedIn: 'root'
})
export class MangaImagesService {
  entity = 'image';
  token: String = '';
  filter: String = '?filter={"include":[{"relation":"manga"}]}';

  constructor(private http: HttpClient, private securityService: SecurityService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get al records of a collection
   */
  getAllRecords(): Observable<MangaImageModel[]> {
    return this.http.get<MangaImageModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${this.filter}`);
  }

  /**
   * Get record by id
   * @param id id to search
   */
  getRecordById(id: String): Observable<MangaImageModel> {
    return this.http.get<MangaImageModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }


  getRecordsByProductId(mangaId: String): Observable<MangaImageModel[]> {
    return this.http.get<MangaImageModel[]>(`${ServiceConfig.BASE_URL}/mangas/${mangaId}/images`);
  }


  UploadProductImage(formData: FormData, order: number, mangaId: String): Observable<UploadImageModel> {
    return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}mangaImage?mangaId=${mangaId}&order=${order}`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}/manga-image/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
 
}
