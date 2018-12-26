import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatsService {
  private apiUrl = '/assets/data/chats';

  constructor(private _http: HttpClient) {}

  getChatsList() {
    const url = `${this.apiUrl}/list.json`;
    return this._http.get(url);
  }

  createChat(chat) {}

  updateChatMessage(key: string, value: any) {}
}
