import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Todo[];
  onTodosChangedSubscrition: Subscription;

  constructor(@Inject('todoService') private service) {}

  ngOnInit() {
    this.service.getTodosByParams();
    this.onTodosChangedSubscrition = this.service.onTodosChangedSubject.subscribe(
      todo => {
        this.todos = todo;
      }
    );
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
