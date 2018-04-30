import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {
  private _navigations: BehaviorSubject<any>;
  private apiUrl = environment.navigationApi;

  get navigations() {
    return this._navigations.asObservable();
  }

  constructor(private http: HttpClient) {
    this._navigations = new BehaviorSubject<any>([]);
  }

  getNavs(topicId: any = '', page: any = 1) {
    let url = `${this.apiUrl}/links/?topicId=${topicId}&page=${page}`;
    if (!environment.production) {
      url = `${this.apiUrl}/links${topicId}${page}.json`;
    }
    this.http
      .get(url)
      // .do(res => console.log(res))
      .subscribe(res => {
        this._navigations.next(res);
      });
  }

  getCategories() {
    let url = `${this.apiUrl}/topic`;
    if (!environment.production) {
      url = `${this.apiUrl}/topic.json`;
    }
    return this.http.get(url);
  }

  getList() {
    const url =
      'https://gist.githubusercontent.com/stbui/f68385d17d5d10e8db58f749297e68fe/raw/61ced92c95c17bf8acb6220255662cdc53cad6fd/navigation.json';

    return this.http.get(url)
    // .map(res => {
      // console.log(res);
      // return res.map(item => {
      //   return {
      //     title: item.title,
      //     description: item.description,
      //     url: item.link,
      //     github_url: item.link_github,
      //     image_url: item.image_link
      //   };
      // });
    // });
  }
}
