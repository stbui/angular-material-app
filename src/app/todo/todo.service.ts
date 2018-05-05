import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Todo } from './todo.model';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {

  private apiUrl = environment.todoApi;

  todos;

  onTodosChangedSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.getTodosByParams();
  }

  getTodosByParams() {
    return this.http.get(this.apiUrl).subscribe((todo) => {
      this.onTodosChangedSubject.next(todo);
    });
  }

  getTodosByFilter() {

  }

  addTodo(todo) {
    this.http.post(this.apiUrl, {...todo}).subscribe(res => {
      this.onTodosChangedSubject.next(res);
    });
  }

  toggleTodo(todo) {

  }

}
