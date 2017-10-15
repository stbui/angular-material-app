import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  files = {
    datas: [
      {
        icon: 'folder',
        name: 'main',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      },
      {
        icon: 'folder',
        name: 'vendor',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      },
      {
        icon: 'folder',
        name: 'polyfills',
        type: 'js',
        provide: 'stbui',
        size: '10k',
        lastModifiedDate: '20171014'
      }
    ]
  };

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onUpdateContact(contact) {
    console.log(contact);
    const dialogRef = this.dialog.open(ContactUpdateComponent, {
      width: '400px',
      panelClass: 'contact-dialog-form',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog');
    });
  }
}

@Component({
  selector: 'stb-contact-upate',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ContactUpdateComponent {

}

