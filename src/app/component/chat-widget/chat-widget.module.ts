/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material';

import { ChatWidgetComponent } from './chat-widget.component';
import { ChatWidgetContainer } from './chat-widget-container';
import { ChatWidgetService } from './chat-widget.service';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, MatButtonModule],
  declarations: [ChatWidgetContainer, ChatWidgetComponent],
  entryComponents: [ChatWidgetContainer, ChatWidgetComponent],
  exports: [ChatWidgetComponent],
  providers: [ChatWidgetService]
})
export class ChatWidgetModule {}
