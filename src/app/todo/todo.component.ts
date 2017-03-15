import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private _todoService: TodoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      let filter = params['filter'];
      this.filterTodos(filter);
    });
    this.getTodos();
  }

  addTodo() {
    this._todoService
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
      });
  }

  toggleTodo(todo: TodoModel):Promise<void> {
    const i = this.todos.indexOf(todo);
    return this._todoService
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }

  removeTodo(todo:TodoModel):Promise<void> {
    const i = this.todos.indexOf(todo);
    return this._todoService
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }

  getTodos(): void {
    this._todoService
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }

  filterTodos(filter: string): void {
    this._todoService.filterTodos(filter).then(todos => this.todos = [...todos]);
  }

  toggleAll() {
    // this.todos.forEach(todo=>this.toggleTodo(todo));
    Promise.all(this.todos.map(todo=>this.toggleTodo(todo)));
  }

  clearCompleted() {
    const completed_todos = this.todos.filter(todo => todo.completed === true);
    const active_todos = this.todos.filter(todo => todo.completed === false);
    Promise.all(completed_todos.map(todo => this._todoService.deleteTodoById(todo.id)))
      .then(() => this.todos = [...active_todos]);
  }

  onTextChanges(value) {
    this.desc = value;
  }

}
