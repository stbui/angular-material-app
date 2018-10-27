import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input()
  chats;
  @Output()
  onActiveChat = new EventEmitter();

  avatar: string = 'assets/images/avatars/noavatar.png';

  constructor() {}

  setActiveChat(chat) {
    this.onActiveChat.emit(chat);
  }
}
