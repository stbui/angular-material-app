import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input() theme: any;
  items:any;
  brand:string = 'stbui';

  constructor(
    @Inject('sidebar') private service,
  ) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.items = this.service.getMenus();
  }

}
