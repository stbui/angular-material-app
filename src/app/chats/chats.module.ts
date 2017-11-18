import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { NoticeComponent } from './notice/notice.component';
import { ChatRoutingModule } from './chats.routing';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule,
    PerfectScrollbarModule
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
    {provide: 'ChatsService', useClass: ChatsService},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ChatsModule {
}
