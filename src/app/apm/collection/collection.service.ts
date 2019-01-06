import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CollectionService {
  private apiUrl = environment.apm;

  constructor(private http: HttpClient) {}

  getList(page?: any, search?: any): Observable<any> {
    const url: string = `${this.apiUrl}/ajax/getOneAjaxList.json`;
    const params = new HttpParams()
      .set('page', page)
      .set('resource_url', search);

    return this.http.get<any>(url, { params });
  }

  getCount(startTime?: any, endTime?: any): Observable<any> {
    const url: string = `${this.apiUrl}/ajax/getOneAjaxAvg.json`;
    const params = { startTime, endTime };

    return this.http.get<any>(url, { params });
  }
}
