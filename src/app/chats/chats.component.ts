import {Component, OnInit, ViewChild, ViewEncapsulation, Inject, ElementRef} from '@angular/core';
import {PerfectScrollbarComponent} from "angular2-perfect-scrollbar";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatsComponent implements OnInit {

  chats: any[];
  activeChat: any;

  @ViewChild('chatScroll') private chatScroll: PerfectScrollbarComponent;

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
