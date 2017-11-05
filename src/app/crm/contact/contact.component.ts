import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  tables = {
    datas: [
      {
        avatar: 'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: 'stbui',
        phone: '15890031275',
        relation: '优质客户',
        company: 'github',
        mail: 'w431106@163.com'
      },
      {
        avatar: 'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: '赵日旭',
        phone: '15890030690',
        relation: '潜在客户',
        company: 'google',
        mail: '772020653@qq.com'
      },
      {
        avatar: 'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: '赵茹君',
        phone: '15890031290',
        relation: '一般客户',
        company: 'facebook',
        mail: '4295@gmail.com'
      }
    ]
  };

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onUpdateContact(contact) {
    const dialogRef = this.dialog.open(ContactUpdateComponent, {
      width: '400px',
      panelClass: 'contact-dialog-form',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'stb-contact-upate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUpdateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}

