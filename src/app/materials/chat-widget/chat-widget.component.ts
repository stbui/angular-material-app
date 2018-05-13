import { Component, OnInit } from '@angular/core';
import { ChatWidgetService } from '../../component/chat-widget';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent implements OnInit {
  constructor(private chatWidgetService: ChatWidgetService) {}

  ngOnInit() {
    this.chatWidgetService.open();
  }
}
