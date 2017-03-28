import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoModel } from './todo.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Observable<TodoModel[]>;
  desc: string = '';

  constructor(
    @Inject('todoService') private service,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params
      .pluck('filter')
      .subscribe(filter => {
        this.service.filterTodos(filter);
        this.todos = this.service.todos;
      });
  }

  addTodo(desc: string) {
    this.service.addTodo(desc);
  }

  toggleTodo(todo: TodoModel) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo:TodoModel) {
    this.service.deleteTodo(todo);
  }

  toggleAll() {
    this.service.toggleAll();
  }

  clearCompleted() {
    this.service.clearCompleted();
  }
}
