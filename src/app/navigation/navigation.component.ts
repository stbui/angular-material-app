import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigations;
  categories: object;
  currentPage;
  totalPages;
  nav_id = '';

  // skeleton screen
  currentNum = new Array(20);

  constructor(@Inject('NavigationService') private service) {
  }

  ngOnInit() {
    this.getNavs();
    this.getCategories();
  }

  getNavs(id: any = '', page: any = '') {
    this.service.getNavs(id, page);
    this.service.navigations.subscribe(res => {
      this.navigations = res.data;
      this.totalPages = res.totalPages;
      this.currentPage = res.currentPage;
      this.hideLoading();
    });
  }

  getCategories() {
    this.service.getCategories().subscribe(res => this.categories = res.data);
  }

  findNavLists(id: any) {
    this.nav_id = id;
    this.getNavs(id, '');
  }

  page(current) {
    this.getNavs(this.nav_id, current);
  }

  setClassActive(id) {
    return this.nav_id === id;
  }

  hideLoading() {
    // 延时显示效果
    setTimeout(() => this.currentNum = new Array(0), 1000);
  }

  showLoading() {
    this.currentNum = new Array(20);
  }
}
