import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chats.routing';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    PerfectScrollbarModule
  ],
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatComponent
  ],
  providers: [
    {provide: 'ChatsService', useClass: ChatsService}
  ]
})
export class ChatsModule {
}
