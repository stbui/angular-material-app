import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { TodoRoutingModule } from './todo.routing';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoSidenavComponent } from './todo-sidenav/todo-sidenav.component';
import { TodoToolbarComponent } from './todo-toolbar/todo-toolbar.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    NgxDnDModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoSidenavComponent,
    TodoToolbarComponent,
    TodoSearchComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})
export class TodoModule {
}
