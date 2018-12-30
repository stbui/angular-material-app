import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Msg {
  content: string;
  style: string;
}

@Injectable()
export class NotifyService {
  private _msgSource = new Subject<Msg | null>();
  msg = this._msgSource.asObservable();

  update(content: string, style: 'error' | 'info' | 'success') {
    console.log(content);
    const msg: Msg = { content, style };
    this._msgSource.next(msg);
  }

  clear() {
    this._msgSource.next(null);
  }
}
