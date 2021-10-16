import { Certificate } from './../models/certificate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  url = `${environment.urlApi}/certificates`

  constructor(protected http: HttpClient) { }

  list(): Observable<Certificate[]>{
    return this.http.get<Certificate[]>(this.url);
  }
}
