import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigations;
  categorys;
  currentPage;
  totalPages;
  nav_id = '';

  constructor(@Inject('NavigationService') private service) {
  }

  ngOnInit() {
    this.getNavs();
    this.getCategorys();
  }

  getNavs(id: any = '', page: any = '') {
    this.service.getNavs(id, page);
    this.service.navigations.subscribe(res => {
      this.navigations = res.data;
      this.totalPages = res.totalPages;
      this.currentPage = res.currentPage;
    });
  }

  getCategorys() {
    this.service.getCategorys().subscribe(res => this.categorys = res.data);
  }

  findNavLists(id: any) {
    this.nav_id = id;
    this.getNavs(id, '');
  }

  page(current) {
    this.getNavs(this.nav_id, current);
  }
}
