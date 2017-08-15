import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatsComponent implements OnInit {

  chats: any[];
  activeChat: any;

  constructor(@Inject('ChatsService') private service) {
  }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.service
      .getChats()
      .subscribe(res => {
        this.chats = res;
        this.activeChat = res[0];
      });
  }

  sendChat(chat) {
    this.service.addChat(chat);
  }

  onActiveChat(chat) {
    this.activeChat = chat;
  }

}
