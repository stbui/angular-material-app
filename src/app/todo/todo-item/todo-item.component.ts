import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent{
  @Input() isChecked: boolean = false;
  @Input() todoDesc: string = '';
  @Output() onToggleTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();

  toggle() {
    this.onToggleTriggered.emit(true);
  }
  remove() {
    this.onRemoveTriggered.emit(true);
  }
}
