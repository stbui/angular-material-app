import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TodoModel } from './todo.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private apiUrl = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    console.log('todo.service.....');
  }

  addTodo(desc: string): Promise<TodoModel> {
    console.log('todo.service addTodo');
    let todo = {
      id: Math.random(),
      desc: desc,
      completed: false
    };

    return this.http
      .post(this.apiUrl, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as TodoModel)
      .catch(this.handleError);
  }

  toggleTodo(todo: TodoModel): Promise<TodoModel> {
    const url = `${this.apiUrl}/${todo.id}`;
    console.log(url);
    let updateTodo = Object.assign({}, todo, {completed: !todo.completed});

    return this.http.put(this.apiUrl, JSON.stringify(updateTodo), {headers: this.headers})
      .toPromise()
      .then(() => updateTodo)
      .catch(this.handleError);
  }

  deleteTodoById(id: string): Promise<void> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getTodos(): Promise<TodoModel[]> {
    console.log('todo.service getTodos');
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data as TodoModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
