/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Injectable, OnDestroy, Inject } from '@angular/core';
import {
  Observable,
  SubscriptionLike,
  Subject,
  Observer,
  interval
} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import { share, distinctUntilChanged, takeWhile } from 'rxjs/operators';
import {
  IWebsocketService,
  IWsMessage,
  WebSocketConfig
} from './websocket.interface';
import { config } from './websocket.config';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements IWebsocketService, OnDestroy {
  private config: WebSocketSubjectConfig<IWsMessage<any>>;

  private websocketSub: SubscriptionLike;
  private statusSub: SubscriptionLike;

  private reconnection$: Observable<number>;
  private websocket$: WebSocketSubject<IWsMessage<any>>;
  private connection$: Observer<boolean>;
  private wsMessages$: Subject<IWsMessage<any>>;

  private reconnectInterval: number;
  private reconnectAttempts: number;
  private isConnected: boolean;

  public status: Observable<boolean>;

  constructor(@Inject(config) private wsConfig: WebSocketConfig) {
    this.wsMessages$ = new Subject<IWsMessage<any>>();

    this.reconnectInterval = wsConfig.reconnectInterval || 5000;
    this.reconnectAttempts = wsConfig.reconnectAttempts || 10;

    this.config = {
      url: wsConfig.url,
      closeObserver: {
        next: (event: CloseEvent) => {
          this.websocket$ = null;
          this.connection$.next(false);
        }
      },
      openObserver: {
        next: (event: Event) => {
          console.log('WebSocket connected!');
          this.connection$.next(true);
        }
      }
    };

    this.status = new Observable<boolean>(observer => {
      this.connection$ = observer;
    }).pipe(
      share(),
      distinctUntilChanged()
    );

    this.statusSub = this.status.subscribe(isConnected => {
      this.isConnected = isConnected;

      if (
        !this.reconnection$ &&
        typeof isConnected === 'boolean' &&
        !isConnected
      ) {
        this.reconnect();
      }
    });

    this.websocketSub = this.wsMessages$.subscribe(null, (error: ErrorEvent) =>
      console.error('WebSocket error!', error)
    );

    this.connect();
  }

  ngOnDestroy() {
    this.websocketSub.unsubscribe();
    this.statusSub.unsubscribe();
  }

  private connect(): void {
    this.websocket$ = new WebSocketSubject(this.config);

    this.websocket$.subscribe(
      message => this.wsMessages$.next(message),
      (error: Event) => {
        if (!this.websocket$) {
          this.reconnect();
        }
      }
    );
  }

  private reconnect(): void {
    this.reconnection$ = interval(this.reconnectInterval).pipe(
      takeWhile(
        (v, index) => index < this.reconnectAttempts && !this.websocket$
      )
    );

    this.reconnection$.subscribe(() => this.connect(), null, () => {
      this.reconnection$ = null;

      if (!this.websocket$) {
        this.wsMessages$.complete();
        this.connection$.complete();
      }
    });
  }

  public on<T>(event: string): Observable<T> {
    if (event) {
      return this.wsMessages$.pipe(
        filter((message: IWsMessage<T>) => message.event === event),
        map((message: IWsMessage<T>) => message.data)
      );
    }
  }

  public send(event: string, data: any = {}): void {
    if (event && this.isConnected) {
      this.websocket$.next(<any>JSON.stringify({ event, data }));
    } else {
      console.error('Send error!');
    }
  }
}
