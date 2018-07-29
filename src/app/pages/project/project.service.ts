import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects$: BehaviorSubject<any> = new BehaviorSubject([]);
  projects = [
    {
      name: 'angular',
      date: +new Date(),
      status: 1
    },
    {
      name: 'material',
      date: +new Date(),
      status: 2
    },
    {
      name: 'flex',
      date: +new Date(),
      status: 3
    }
  ];

  constructor() {
    this._projects$.next(this.projects);
  }

  getProjects() {
    return this._projects$;
  }
}
