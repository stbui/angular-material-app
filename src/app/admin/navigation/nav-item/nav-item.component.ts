import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stbui-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

}
