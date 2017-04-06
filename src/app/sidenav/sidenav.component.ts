import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items;

  constructor( @Inject('sidebar') private service,) { }

  ngOnInit() {
    this.getMemus();
  }

  getMemus() {
    this.items = this.service.getMenus();
  }

  toggleDropdown() {

  }
}
