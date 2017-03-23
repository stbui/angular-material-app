import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './chat.routes';
import { ChatService } from './chat.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserDbService } from './data/user';

import { ChatComponent } from './chat.component';
import { UserComponent } from './user/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatsComponent } from './chats/chats.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryUserDbService)
  ],
  providers: [
    { provide: 'ChatService', useClass: ChatService }
  ],
  declarations: [ChatComponent, UserComponent, ContactsComponent, ChatsComponent]
})
export class ChatModule { }
