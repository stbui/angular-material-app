/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Observable } from 'rxjs';

export interface IWebsocketService {
  on<T>(event: string): Observable<T>;
  send(event: string, data: any): void;
  status: Observable<boolean>;
}

export interface WebSocketConfig {
  url: string;
  reconnectInterval?: number;
  reconnectAttempts?: number;
}

export interface IWsMessage<T> {
  event: string;
  data: T;
}
