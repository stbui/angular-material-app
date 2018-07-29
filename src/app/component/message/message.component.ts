/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'stbui-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'stbui-message',
    '[class.mat-primary]': 'color==="primary"',
    '[class.mat-accent]': 'color==="accent"',
    '[class.mat-warn]': 'color==="warn"'
  }
})
export class MessageComponent implements OnInit {
  private _opened: boolean = true;

  @Input() label: string;
  @Input() sublabel: string;
  @Input() color: 'primary' | 'accent' | 'warn';
  @Input('icon') icon: string = 'info_outline';
  @Input('opened')
  set opened(opened: boolean) {
    if (opened) {
      this.open();
    } else {
      this.close();
    }
  }
  get opened(): boolean {
    return this._opened;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  open(): void {
    if (!this._opened) {
      this._opened = true;
      this.changeDetectorRef.markForCheck();
    }
  }

  close(): void {
    if (this._opened) {
      this._opened = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  toggle(): void {
    if (this._opened) {
      this.close();
    } else {
      this.open();
    }
  }
}
