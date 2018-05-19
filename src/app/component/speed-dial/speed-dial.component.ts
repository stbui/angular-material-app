/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterContentInit,
  ViewEncapsulation
} from '@angular/core';
import { MatButton } from '@angular/material/button';

export type Position = 'up' | 'down' | 'left' | 'right';

@Component({
  moduleId: module.id,
  selector: 'stbui-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'stbuiSpeedDial',
  host: {
    class: 'speed-dial'
  }
})
export class SpeedDialComponent implements AfterContentInit {
  @Input() position: Position = 'up';
  @Input() open: boolean = false;

  @ContentChildren(MatButton) _buttons: QueryList<MatButton>;
  @ViewChild('actions') _actions: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.toggle();
    this._buttons.toArray().forEach(button => {
      this.renderer.addClass(button._getHostElement(), 'spped-dial-action');
    });
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
    this._buttons.toArray().forEach(button => {
      const transform = this._getOrigin('0');
      this.renderer.setStyle(button._getHostElement(), 'transform', transform);
    });
  }

  hide() {
    this._buttons.toArray().forEach((button, index) => {
      const pos = 55 * (index + 1) - index * 5;
      const transform = this._getOrigin(pos + 'px');
      this.renderer.setStyle(button._getHostElement(), 'transform', transform);
    });
  }

  _getOrigin(value) {
    let position = this.position;
    let translateFn =
      position === 'up' || position === 'down' ? 'translateY' : 'translateX';
    let sign = position === 'down' || position === 'right' ? '-' : '';
    return translateFn + '(' + sign + value + ')';
  }
}
