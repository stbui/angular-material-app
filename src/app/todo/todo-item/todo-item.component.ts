import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo: any;
  @Input() isChecked: boolean = false;
  @Output() onToggleTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();
  @Input() title: string = '';
  @Input() notes: string = '';

  toggle(todo) {
    this.onToggleTriggered.emit(todo);
  }

  remove() {
    this.onRemoveTriggered.emit(true);
  }
}
