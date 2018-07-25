import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PerformanceService {
  api = '/assets/data/apm';

  onPerformancesChangedSubject: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  getPerformances() {
    const url = `${this.api}/performance.json`;
    this.http
      .get(url)
      .subscribe(performance =>
        this.onPerformancesChangedSubject.next(performance)
      );
  }
}
