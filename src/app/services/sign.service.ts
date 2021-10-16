import { Certificate } from './../models/certificate';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signer } from '../models/signer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  url = `${environment.urlApi}/sign`

  constructor(protected http: HttpClient) { }

  signA1(body: FormData): Observable<any> {
    return this.http.post(this.url, body, { responseType: 'blob' });
  }
}
