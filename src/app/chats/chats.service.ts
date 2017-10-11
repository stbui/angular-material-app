import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatsService {

  private basePath = 'chats';
  chatsRef: AngularFireList<any>;
  chatRef: AngularFireObject<any>;

  chats: Observable<any>;
  chat: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.chatsRef = this.db.list(this.basePath);
  }

  getChatsList() {
    return this.chatsRef.snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), {$key: snap.key}));
    });
  }

  getChat(key: string): Observable<any> {
    const path = `${this.basePath}/${key}`;
    this.chat = this.db.object(path).valueChanges();
    return this.chat;
  }

  createChat(chat) {
    this.chatsRef.push(chat);
  }

  updateChatMessage(key: string, value: any) {
    this.chatsRef.update(key, {messages: value.messages});
  }

  deleteChat(key: string) {
    this.chatsRef.remove(key);
  }

  deleteAll() {
    this.chatsRef.remove();
  }
}
