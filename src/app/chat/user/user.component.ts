import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  _user;
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
    console.log(this._user)
  }

}
