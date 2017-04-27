import { Component,Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'stb-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() mail;
  shownMailDetail;

  constructor() { }

  ngOnInit() {
  }

}
