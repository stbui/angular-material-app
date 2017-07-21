import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "angular2-perfect-scrollbar";
// test
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryChatDbService } from './chats.data';

import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';


const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    // InMemoryWebApiModule.forRoot(InMemoryChatDbService)
  ],
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatComponent
  ],
  providers: [
    { provide: 'ChatsService', useClass: ChatsService}
  ]
})
export class ChatsModule { }
