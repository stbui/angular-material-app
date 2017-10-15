import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users;
  checked = false;

  sideOpen: boolean = true;

  constructor(@Inject('UserService') private _service) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this._service.getUserList();
    this._service.userList$.subscribe(res => {
      this.users = res;
    });
  }

  onEditTriggered(user) {
    console.log(user);
  }

  onDeleteTriggered(user) {
    let i = this.users.indexOf(user);

    this.users = [
      ...this.users.slice(0, i),
      ...this.users.slice(i + 1)
    ];
  }

  onSideTriggered() {
    this.sideOpen = false;
  }
}
