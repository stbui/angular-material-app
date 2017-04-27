import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { Chat } from './chats.model';

@Injectable()
export class ChatsService {
  public api = environment.chatsApi + '/chats';
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  addChat(chat) {
    let url = `${this.api}/${chat.name}`;

    return this.http
      .post(url, JSON.stringify(chat), {headers: this.header})
      .map(res => res.json() as Chat[]);
  }

  getChats(): Observable<any> {
    return this.http.get(this.api).map(res => res.json() as Chat[]);
  }

}
