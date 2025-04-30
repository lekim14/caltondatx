import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../interface';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  makePost(payload : Contact){
    return this.http.post(`${this.baseUrl}/customer/post`, payload);
  }
}
