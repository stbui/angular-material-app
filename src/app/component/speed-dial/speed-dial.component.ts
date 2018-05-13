/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ContentChildren,
  QueryList,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { MatButton } from '@angular/material/button';

export type Direction = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'stbui-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent implements OnInit {
  private _direction: Direction = 'up';
  private _open: boolean = false;

  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(open: boolean) {
    this._open = open;
  }

  @Input()
  get direction(): Direction {
    return this._direction;
  }

  set direction(direction: Direction) {
    this._direction = direction;
  }

  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChildren(MatButton) _buttons: QueryList<MatButton>;
  @ViewChild('actions') _actions: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  dialTrigger() {
    if (this.open) {
      this.open = false;
    }
  }

  toggle(): void {
    this.open = !this.open;

    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    const _buttons = this._actions.nativeElement.children;

    for (let i = 0; i < _buttons.length; i++) {
      const transform = 0;
      this.renderer.setStyle(
        _buttons[i],
        'transform',
        `translateY(${transform})`
      );
    }
  }

  hide() {
    const _buttons = this._actions.nativeElement.children;

    for (let i = 0; i < _buttons.length; i++) {
      const transform = 55 * (i + 1) - i * 5 + 'px';
      this.renderer.setStyle(
        _buttons[i],
        'transform',
        `translateY(${transform})`
      );
    }
  }
}
