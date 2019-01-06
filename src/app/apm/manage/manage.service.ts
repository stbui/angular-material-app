import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private apiUrl = environment.apm;

  constructor(private http: HttpClient) {}

  getList() {
    const url = `${this.apiUrl}/system/list.json`;
    return this.http.get<any>(url);
  }
}
