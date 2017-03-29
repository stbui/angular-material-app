import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigations;

  constructor(@Inject('NavigationService') private service) { }

  ngOnInit() {
    this.getNavs();
  }

  getNavs() {
    this.service.getNavs();

    this.navigations  = this.service.navigations;
    console.log(this.service.navigations)
  }

}
