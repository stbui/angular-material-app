import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  _todos: Todo[] = [];
  @Input()
  set todos(todos: Todo[]) {
    this._todos = [...todos];
  }

  get todos() {
    return this._todos;
  }

  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }

  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }

  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }
}
