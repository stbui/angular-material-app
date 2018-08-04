import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../component/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  constructor(private dialog: DialogService) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(DialogsComponent, {
      width: '400px'
    });
  }

  openAlert() {
    this.dialog.alert({
      title: 'title',
      message: 'message',
      closeButton: '确定'
    });
  }

  openConfirm() {
    this.dialog.confirm({
      title: 'title',
      message: 'message',
      cancelButton: '取消',
      acceptButton: '确定'
    });
  }
}
