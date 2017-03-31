import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  theme: string = 'bg-success';
  title = 'angular2 material2 web - Power by 码农庄园';

  constructor() { }

  ngOnInit() {
  }

  onThemeChanges(theme) {
    this.theme = theme;
  }
}
