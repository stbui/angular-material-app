import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from './todo.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit, OnDestroy {

  todos: Todo[];
  onTodosChangedSubscrition: Subscription;

  constructor(@Inject('todoService') private service,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    // this.router.params
    //   .pluck('filter')
    //   .subscribe(filter => {
    //     this.service.filterTodos(filter);
    //     this.todos = this.service.todos;
    //   });
    this.service.getTodosByParams();
    this.onTodosChangedSubscrition = this.service.onTodosChangedSubject.subscribe((todo) => {
      this.todos = todo;
    });
  }

  addTodo(todo: Todo) {
    this.service.addTodo(todo);
  }

  toggleTodo(todo: Todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo: Todo) {
    // this.service.deleteTodo(todo);
  }

  toggleAll() {
    // this.service.toggleAll();
  }

  clearCompleted() {
    // this.service.clearCompleted();
  }

  ngOnDestroy() {
    this.onTodosChangedSubscrition.unsubscribe();
  }
}
