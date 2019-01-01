import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ScriptService {
  api = environment.apm;

  constructor(private http: HttpClient) {}

  getList() {
    const url = `${this.api}/script.json`;
    return this.http.get<any>(url);
  }
}
