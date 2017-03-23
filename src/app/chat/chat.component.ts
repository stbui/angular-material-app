import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user;

  constructor(@Inject('ChatService') private service) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    // this.service
    //   .getUser()
    //   .then(user => this.user);

    this.user = {
      "id": "5725a6802d10e277a0f35724",
      "name": "John Doe",
      "avatar": "assets/images/avatars/profile.jpg",
      "status": "online",
      "mood": "it's a status....not your diary..."
    }
  }
}
