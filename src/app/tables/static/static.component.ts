import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  rows;

  tableHover: boolean;
  tableStriped: boolean;
  tableCondensed: boolean;
  tableBordered: boolean;

  constructor() { }

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    this.rows = [
      {
        "name": {
          "first": "Debora",
          "last": "Castro"
        },
        "picture": "assets/img/avatars/15.png",
        "company": "SIGNIDYNE",
        "email": "debora.castro@signidyne.ca",
        "phone": "+1 (979) 427-3700",
        "balance": "$1,743.04"
      },
      {
        "name": {
          "first": "Warren",
          "last": "Gallegos"
        },
        "picture": "assets/img/avatars/8.png",
        "company": "XSPORTS",
        "email": "warren.gallegos@xsports.biz",
        "phone": "+1 (964) 433-3008",
        "balance": "$1,122.90"
      },
      {
        "name": {
          "first": "Gordon",
          "last": "Sloan"
        },
        "picture": "assets/img/avatars/17.png",
        "company": "FUTURIS",
        "email": "gordon.sloan@futuris.com",
        "phone": "+1 (904) 572-2860",
        "balance": "$1,505.24"
      },
      {
        "name": {
          "first": "Nettie",
          "last": "Hoover"
        },
        "picture": "assets/img/avatars/5.png",
        "company": "UNEEQ",
        "email": "nettie.hoover@uneeq.us",
        "phone": "+1 (943) 579-2855",
        "balance": "$2,206.32"
      },
      {
        "name": {
          "first": "Bartlett",
          "last": "Kramer"
        },
        "picture": "assets/img/avatars/13.png",
        "company": "MIXERS",
        "email": "bartlett.kramer@mixers.co.uk",
        "phone": "+1 (897) 410-2327",
        "balance": "$1,220.73"
      }
    ];
  }

}
