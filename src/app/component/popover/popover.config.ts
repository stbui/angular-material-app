/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */
import { Direction } from '@angular/cdk/bidi';
import { ScrollStrategy } from '@angular/cdk/overlay';

export type scrollStrategy = 'noop' | 'block' | 'reposition' | 'close';
export type horizontalPosition =
  | 'before'
  | 'start'
  | 'center'
  | 'end'
  | 'after';
export type verticalPosition = 'above' | 'start' | 'center' | 'end' | 'below';

export interface PopoverPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export class PopoverConfig {
  hasBackdrop?: boolean = false;
  position?: PopoverPosition;
  direction?: Direction;
  scrollStrategy?: ScrollStrategy;
}
