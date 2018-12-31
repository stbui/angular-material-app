import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Users {
  id: string;
  name: string;
}

export interface UsersApi {
  items: Users[];
  total_count: number;
}

@Injectable()
export class DynamicService {
  private apiUrl = '/assets/data/pages';
  private dataStore;

  get data() {
    return this.dataStore;
  }

  constructor(private http: HttpClient) {}

  select(active?: any, direction?: any, pageIndex?: any) {
    console.log(active, direction, pageIndex);
    const url = `${this.apiUrl}/userList.json`;
    return this.http.get(url);
  }

  add(data) {
    let newData = Object.assign(this.getLastId(), data);
    this.dataStore.push(newData);
  }

  delete(data) {
    let result = this.dataStore.filter((v, k) => {
      if (v.id == data.id) {
        return v;
      }
    });

    const i = this.dataStore.indexOf(result[0]);
    this.dataStore = [
      ...this.dataStore.slice(0, i),
      ...this.dataStore.slice(i + 1)
    ];
  }

  count() {
    return this.dataStore.length;
  }

  getLastId() {
    let pop = this.dataStore.pop();
    let id = pop.id;

    return { id };
  }
}
