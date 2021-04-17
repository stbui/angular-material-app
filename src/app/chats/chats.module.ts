import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../@stbui/shared/shared.module';

import { ChatsService } from './chats.service';
// import { ChatsFirebase } from './chats.firebase';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { NoticeComponent } from './notice/notice.component';
import { ChatRoutingModule } from './chats.routing';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatComponent,
    NoticeComponent
  ],
  entryComponents: [NoticeComponent],
  providers: [
    // ChatsFirebase,
    ChatsService,
  ]
})
export class ChatsModule { }
