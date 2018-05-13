import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionComponent } from './action/action.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  categories: object;
  lists;

  // skeleton screen
  currentNum = new Array(20);

  constructor(
    @Inject('NavigationService') private service,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getNavigations();
  }

  getCategories() {
    this.categories = this.service.selectCategories();
  }

  getNavigations() {
    this.lists = this.service.select();
    this.hideLoading();
  }

  hideLoading() {
    // 延时显示效果
    setTimeout(() => (this.currentNum = new Array(0)), 1000);
  }

  showLoading() {
    this.currentNum = new Array(20);
  }

  selectedTagChange(tag) {}

  editorItem(item) {
    const dialogRef = this.dialog.open(ActionComponent, {
      data: item,
      width: '600px'
    });
  }
}
