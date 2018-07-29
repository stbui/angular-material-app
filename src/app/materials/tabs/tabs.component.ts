import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  navLinks = [
    { label: 'test1', path: '/materials/tabs' },
    { label: 'test2', path: '/materials/tabs' }
  ];

  constructor() {}

  ngOnInit() {}
}
