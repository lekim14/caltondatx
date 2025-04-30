import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get(`${this.baseUrl}/faq/all`);
  }

}
