import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class CollectionService {

  api = environment.apm;

  onCollectionsChangedSubject: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getCollections() {
    const url = `${this.api}/collection.json`;
    this.http.get(url).subscribe(collection => this.onCollectionsChangedSubject.next(collection));
  }

}
