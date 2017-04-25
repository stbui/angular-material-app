import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users;

  private checked = false;

  constructor() { }

  ngOnInit() {
    let data = [
      {
        uid:1,
        account:"stbui",
        loginTime:"2017.04.17",
        loginIP:"127.0.0.1",
        status:"正常"
      },
      {
        uid:2,
        account:"stbui",
        loginTime:"2017.04.17",
        loginIP:"127.0.0.1",
        status:"正常"
      }
    ];

    this.users = data;
  }

  onEditTriggered(user) {
    console.log(user)
  }

  onDeleteTriggered(user) {
    let i = this.users.indexOf(user);

    this.users = [
      ...this.users.slice(0,i),
      ...this.users.slice(i+1)
    ];
  }
}
