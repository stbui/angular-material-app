import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit {

  todos: TodoModel[] = [];
  desc: string = '';

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo() {
    this._todoService
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
      });
  }

  toggleTodo(todo: TodoModel) {
    const i = this.todos.indexOf(todo);
    this._todoService
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0, i),
          t,
          ...this.todos.slice(i + 1)
        ];
      });
  }

  removeTodo(todo:TodoModel) {
    const i = this.todos.indexOf(todo);
    this._todoService
      .deleteTodoById(todo.id)
      .then(() => {
        this.todos = [
          ...this.todos.slice((0, i)),
          ...this.todos.slice(i + i)
        ];
      });
  }

  getTodos(): void {
    this._todoService
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }

  onTextChanges(value) {
    console.log(value);
    this.desc = value;
  }

}
