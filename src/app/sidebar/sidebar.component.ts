import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input() theme: any;
  classes: any;
  isMenuOpen: boolean = false;

  items:any={};

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngOnInit() {
    let menu = {
      name: 'test',
      icon: 'icon',
      items: [
        {
          name: 'test1',
          badeg: 3,
          links: '#'
        },
        {
          name: 'test2',
          badeg: 3,
          links: '#'
        }
      ]
    }

    this.items = menu;
  }

  toggleQuickview() {
  }

  toggleMenu($event) {
    var element$ = $event.target;
    console.log(element$);

    element$.classList.add('open');
    this.isMenuOpen = !this.isMenuOpen;
  }
}
