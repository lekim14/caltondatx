import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerStories } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/all`);
  }
  
}