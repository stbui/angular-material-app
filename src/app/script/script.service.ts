import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class ScriptService {

  api = environment.apm;
  onScriptsChangedSubject: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {

  }

  getScripts() {
    const url = `${this.api}/script.json`;
    return this.http.get(url).subscribe(script => {
      this.onScriptsChangedSubject.next(script);
    });
  }

}
