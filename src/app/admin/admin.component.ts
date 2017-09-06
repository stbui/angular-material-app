import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title = 'angular2 material2 web - Power by 码农庄园';
  theme = {
    header: 'stbui-white',
    aside: 'stbui-default',
    logo: 'stbui-primary'
  };

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * @param {Object} theme 主题对象
   */
  onTheme(theme) {
    this.theme = theme;
  }

  /**
   * @param {Event} event 事件
   * @param {Object} scrollContainer 容器dom
   */
  onActivate(event, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
