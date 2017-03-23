import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  _user;
  users;
  @Input()
  set user(u) {
    console.log(u)
    this._user = u;
  }
  get user() {
    return this._user;
  }

  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    let data = [{},{},{},{},{},{}]
    this.users = data;
  }

}
