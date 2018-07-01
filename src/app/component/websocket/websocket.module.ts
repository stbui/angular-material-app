/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from './websocket.service';
import { config } from './websocket.config';
import { WebSocketConfig } from './websocket.interface';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [WebsocketService]
})
export class WebsocketModule {
  public static config(wsConfig: WebSocketConfig): ModuleWithProviders {
    return {
      ngModule: WebsocketModule,
      providers: [{ provide: config, useValue: wsConfig }]
    };
  }
}
