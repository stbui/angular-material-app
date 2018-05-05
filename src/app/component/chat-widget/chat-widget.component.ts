/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

const randomMessages = [
  '没事的时候，打打工，不为赚钱，只为锻炼自己。',
  '今天天气不错，欢迎新人来到。',
  '你匿了那么久，现在终于入群了。',
  '亲，欢迎您的再次关注，有什么需要我的帮助吗？很乐意为你效劳!',
  '对不起，您的要求不在我们的服务范围内',
  '很抱歉，我无法帮助您！',
  '您的问题我需要核实一下，请您稍等。',
  '请问还有什么可以帮您？',
  '感谢您的咨询，再见！',
  '请问还有什么可以帮助您？',
  '您的问题我已记录好，会提交给相关人员处理，并在三个工作日内回复您。',
  ':)'
];
const rand = max => Math.floor(Math.random() * max);
const getRandomMessage = () => randomMessages[rand(randomMessages.length)];
@Component({
  selector: 'stbui-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  @ViewChild('bottom') bottom: ElementRef;

  visible = false;

  operator = {
    name: 'Stbui',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/women/${rand(100)}.jpg`
  };

  client = {
    name: '访客',
    status: 'online',
    avatar: `https://randomuser.me/api/portraits/men/${rand(100)}.jpg`
  };

  messages = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.addMessage(
        this.operator,
        '您好，欢迎光临，很高兴为您服务！',
        'received'
      );
    }, 1500);
  }

  addMessage(from, text, type: 'received' | 'sent') {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime()
    });
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView();
    }
  }

  randomMessage() {
    this.addMessage(this.operator, getRandomMessage(), 'received');
  }

  sendMessage({ message }) {
    if (message.trim() === '') {
      return;
    }
    this.addMessage(this.client, message, 'sent');
    setTimeout(() => this.randomMessage(), 1000);
  }

  toggleChat() {
    this.visible = !this.visible;
  }

  onSubmit() {
    const message = this.getMessage();
    if (message.trim() === '') {
      return;
    }

    this.sendMessage({ message });
    this.clearMessage();
    this.focusMessage();
  }

  getMessage() {
    return this.message.nativeElement.value;
  }

  focusMessage() {
    this.message.nativeElement.focus();
  }

  clearMessage() {
    this.message.nativeElement.value = '';
  }
}
