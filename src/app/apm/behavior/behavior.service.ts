import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  private apiUrl = environment.apm;

  constructor(private http: HttpClient) {}

  getList(page?: any, search?: any): Observable<any> {
    const url: string = `${this.apiUrl}/behavior/getList.json`;
    const params = new HttpParams().set('page', page);

    return this.http.get<any>(url, { params });
  }
}
