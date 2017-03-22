import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, ContactsComponent, ChatsComponent]
})
export class ChatModule { }
