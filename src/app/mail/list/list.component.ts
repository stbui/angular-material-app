import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'stb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() mails;
  @Output() onOpenMailDetial = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  onOpenMailDetialTriggered(mail) {
    this.onOpenMailDetial.emit(mail);
  }

}
