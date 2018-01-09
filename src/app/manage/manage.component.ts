import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'apm-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  selected = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.rows = [
      { name: '监控系统', apiKey: 'PkbX57vcmcMJijAHidUbEEUwh5TWTojo', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '运营系统', apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC', url: 'http://127.0.0.1', createTime: 1515044877551 },
      { name: '电销系统', apiKey: 'Hf63HpCWoN4pDEV_2s0KYwXx_rj95569', url: 'http://127.0.0.1', createTime: 1515044877551 }
    ]

    this.loadingIndicator = false;
  }

  onNew() {
    let dialogRef = this.dialog.open(NewComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.selected = selected;
  }
}
