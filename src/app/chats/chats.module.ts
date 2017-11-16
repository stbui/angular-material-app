import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { NoticeComponent } from './notice/notice.component';
import { ChatRoutingModule } from './chats.routing';

// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    // PerfectScrollbarModule.forChild(),
  ],
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatComponent,
    NoticeComponent
  ],
  entryComponents: [
    NoticeComponent
  ],
  providers: [
    {provide: 'ChatsService', useClass: ChatsService}
  ]
})
export class ChatsModule {
}
