import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

import { TodoRoutingModule } from './todo.routing';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})
export class TodoModule {
}
