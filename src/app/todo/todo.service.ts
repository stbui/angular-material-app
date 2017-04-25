import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { TodoModel } from './todo.model';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {
  private apiUrl = environment.todoApi + '/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  private _todos: BehaviorSubject<TodoModel[]>;
  private dataStore: {todos: TodoModel[]};

  constructor(private http: Http) {
    this.dataStore = {todos: []};
    this._todos = new BehaviorSubject<TodoModel[]>([]);
  }

  get todos() {
    return this._todos.asObservable();
  }

  addTodo(desc: string) {
    let todoToAdd = {
      id: Math.random(),
      desc: desc,
      completed: false
    }

    this.http.post(this.apiUrl, JSON.stringify(todoToAdd), {headers: this.headers})
      .map(res => res.json() as TodoModel)
      .subscribe(todo => {
        this.dataStore.todos = [...this.dataStore.todos, todo];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }

  toggleTodo(todo: TodoModel) {
    const url = `${this.apiUrl}/${todo.id}`;
    const i = this.dataStore.todos.indexOf(todo);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    this.http.post(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .subscribe(r => {
        this.dataStore.todos = [
          ...this.dataStore.todos.slice(0, i),
          updatedTodo,
          ...this.dataStore.todos.slice(i + 1)
        ];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }

  deleteTodo(todo: TodoModel) {
    const url = `${this.apiUrl}/${todo.id}`;
    const i = this.dataStore.todos.indexOf(todo);
    this.http
      .delete(url, {headers: this.headers})
      .subscribe(r => {
        this.dataStore.todos = [
          ...this.dataStore.todos.slice(0, i),
          ...this.dataStore.todos.slice(i + 1)
        ];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }

  getTodos() {
    this.http.get(this.apiUrl)
      .map(res => res.json() as TodoModel[])
      .do(r => console.log(r))
      .subscribe(todos => {
        this.dataStore.todos = [...todos];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }

  filterTodos(filter: string) {
    switch (filter) {
      case 'ACTIVE':
        this.http
          .get(`${this.apiUrl}?completed=false`)
          .map(res => res.json() as TodoModel[])
          .subscribe(todos => {
            this.dataStore.todos = [...todos];
            this._todos.next(Object.assign({}, this.dataStore).todos);
          });
        break;
      case 'COMPLETED':
        this.http
          .get(`${this.apiUrl}?completed=true`)
          .map(res => res.json() as TodoModel[])
          .subscribe(todos => {
            this.dataStore.todos = [...todos];
            this._todos.next(Object.assign({}, this.dataStore).todos);
          });
        break;
      default:
        this.getTodos();
    }
  }

  toggleAll() {
    this.dataStore.todos.forEach(todo => this.toggleTodo(todo));
  }

  clearCompleted() {
    this.dataStore.todos
      .filter(todo => todo.completed)
      .forEach(todo => this.deleteTodo(todo));
  }
}
