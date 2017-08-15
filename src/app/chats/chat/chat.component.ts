import { Component, Input, Inject, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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

  newMessage: string;
  avatar: string = 'assets/images/avatars/noavatar.png';

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

  constructor(@Inject('ChatsService') private service) {
  }

  ngOnInit() {
    this.directiveScroll.scrollToBottom();
  }

  onSendTriggered() {
    if (this.newMessage) {
      let chat = {
        message: this.newMessage,
        when: new Date(),
        who: 'me'
      };

      this.activeChat.messages.push(chat);
      this.onSendChat.emit(this.activeChat);
      this.newMessage = '';
    }

    this.directiveScroll.scrollToBottom();
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }

  onChatSideTriggered() {
    this.chatSidenav.toggle();
  }

}
