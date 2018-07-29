import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogInterface } from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private api = {
    domain: 'https://api.github.com/repos',
    path: '/stbui/blog/issues'
  };

  constructor(private http: HttpClient) {}

  getIssues() {
    const url = this.api.domain + this.api.path;
    return this.http.get<BlogInterface>(url);
  }

  getDetail(id: number) {
    const url = this.api.domain + this.api.path + '/' + id;
    return this.http.get(url);
  }
}
