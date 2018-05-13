import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { localStorageDb } from './localStorageDb';

@Injectable()
export class NavigationService {
  private apiUrl = environment.navigationApi;

  get navigations() {
    return new localStorageDb('nav');
  }

  get categories() {
    return new localStorageDb('nav_category');
  }

  constructor(private http: HttpClient) {}

  syncLocalNavigaitons() {
    this.syncGithubNavigations().subscribe(res => {
      this.navigations.add(res);
    });
  }

  getLocalNavigations() {
    if (!this.categories.hasCollections()) {
      this.syncNavigations().subscribe(res => {
        this.navigations.add(res['data']);
      });
    }

    return this.navigations.select();
  }

  updateLocalNavigation(id, item) {
    this.navigations.where({ id }).update(item);
  }

  select() {
    return this.getLocalNavigations();
  }

  update(id, item) {
    this.updateLocalNavigation(id, item);
  }

  selectCategories() {
    if (!this.categories.hasCollections()) {
      this.syncCategories().subscribe(res => {
        this.categories.add(res['data']);
      });
    }

    return this.categories.select();
  }

  syncNavigations(topicId: any = '', page: any = 1) {
    let url = `${this.apiUrl}/links/?topicId=${topicId}&page=${page}`;
    if (!environment.production) {
      url = `${this.apiUrl}/links${topicId}${page}.json`;
    }

    return this.http.get(url);
  }

  syncCategories() {
    let url = `${this.apiUrl}/topic`;
    if (!environment.production) {
      url = `${this.apiUrl}/topic.json`;
    }

    return this.http.get(url);
  }

  /**
   * 从github中获取数据
   */
  syncGithubNavigations() {
    const url =
      'https://gist.githubusercontent.com/stbui/f68385d17d5d10e8db58f749297e68fe/raw/61ced92c95c17bf8acb6220255662cdc53cad6fd/navigation.json';

    return this.http.get(url);
  }
}
