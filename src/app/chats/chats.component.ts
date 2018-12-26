import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatsFirebase } from './chats.firebase';
import { ChatsService } from './chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatsComponent implements OnInit {
  chats: any;
  activeChat: any;

  chatName: string = 'demo';

  constructor(private service: ChatsService) {}

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.service.getChatsList().subscribe(chats => {
      this.chats = chats;
      this.activeChat = chats[0];
    });
  }

  createChat() {
    let d = {
      picture: 'assets/images/avatars/2.jpg',
      name: this.chatName,
      messages: [
        {
          message: '这是 Angular 2 交流群',
          when: 1,
          who: 'me'
        },
        {
          message: '推荐下Angular 2 有哪些开源项目？',
          when: 1,
          who: 'partner'
        }
      ],
      lastMessageTime: 1,
      lastMessage: '技术交流'
    };
    this.service.createChat(d);
  }

  sendChat(chat) {
    this.service.updateChatMessage(chat.$key, chat);
  }

  onActiveChat(chat) {
    this.activeChat = chat;
  }
}
