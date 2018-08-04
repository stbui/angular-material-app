/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import {
  Component,
  Directive,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

@Directive({ selector: 'stbui-dialog-title' })
export class DialogTitleDirective {}

@Directive({ selector: 'stbui-dialog-content' })
export class DialogContentDirective {}

@Directive({ selector: 'stbui-dialog-actions' })
export class DialogActionsDirective {}

@Component({
  selector: 'stbui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterContentInit {
  @ContentChildren(DialogTitleDirective)
  dialogTitle: QueryList<DialogTitleDirective>;
  @ContentChildren(DialogContentDirective)
  dialogContent: QueryList<DialogContentDirective>;
  @ContentChildren(DialogActionsDirective)
  dialogActions: QueryList<DialogActionsDirective>;

  ngAfterContentInit(): void {
    if (this.dialogTitle.length > 1) {
      throw new Error(
        'Duplicate stbui-dialog-title component at in stbui-dialog.'
      );
    }
    if (this.dialogContent.length > 1) {
      throw new Error(
        'Duplicate stbui-dialog-content component at in stbui-dialog.'
      );
    }
    if (this.dialogActions.length > 1) {
      throw new Error(
        'Duplicate stbui-dialog-actions component at in stbui-dialog.'
      );
    }
  }
}
