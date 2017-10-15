import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoticeComponent } from '../notice/notice.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() chatSidenav;
  @Input() activeChat;
  @Input() messages;
  @Output() onSendChat = new EventEmitter();

  newMessage: string;
  avatar: string = 'assets/images/avatars/noavatar.png';

  animal: string;
  name: string;

  constructor(@Inject('ChatsService') private service, public dialog: MatDialog) {
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

  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }

  onChatSideTriggered() {
    this.chatSidenav.toggle();
  }

  onNoticeTriggered() {
    const dialogRef = this.dialog.open(NoticeComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
