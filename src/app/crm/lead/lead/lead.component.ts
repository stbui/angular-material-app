import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
  data;

  rows: any[] = [];
  loadingIndicator = true;
  reorderable = true;

  selected = [];

  constructor(
    @Inject('LeadService') private service,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.rows.push({
        name: '姓名' + i,
        company: '公司名称' + i,
        tel: '电话' + i,
        phone: '手机' + i,
        status_mapped: '跟进状态' + i,
        lastest_revisit_log: '最新跟进记录' + i,
        real_revisit_at: '实际跟进时间' + i,
        revisit_remind_at: '下次跟进时间' + i
      });
    }

    this.loadingIndicator = false;
  }

  onNew(e) {
    let dialogRef = this.dialog.open(NewComponent, {
      width: '500px'
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
