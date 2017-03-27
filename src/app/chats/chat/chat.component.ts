import {Component, Input, Inject, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chatSidenav;
  @Input() activeChat;
  @Input() messages;
  @Output() onSendChat = new EventEmitter();

  newMessage:string;
  avatar:string='assets/images/avatars/noavatar.png';

  constructor(@Inject('ChatsService') private service) {
  }

  ngOnInit() {
  }

  onSendTriggered() {
    if (this.newMessage) {
      let chat = {
        message: this.newMessage,
        when: new Date(),
        who: 'me'
      }

      this.activeChat.messages.push(chat);
      this.onSendChat.emit(this.activeChat);
      this.newMessage = '';
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }

  onChatSideTriggered() {
    this.chatSidenav.toggle();
  }

}
