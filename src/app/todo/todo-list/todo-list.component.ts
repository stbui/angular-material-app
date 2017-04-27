import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  _todos: TodoModel[] = [];
  @Input()
  set todos(todos:TodoModel[]){
    this._todos = [...todos];
  }
  get todos() {
    return this._todos;
  }
  @Output() onRemoveTodo = new EventEmitter<TodoModel>();
  @Output() onToggleTodo = new EventEmitter<TodoModel>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  onRemoveTriggered(todo: TodoModel) {
    this.onRemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: TodoModel) {
    this.onToggleTodo.emit(todo);
  }
  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }
}
