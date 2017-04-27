import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  private markdown = '';
  private source = `
# angular2-material2-admin-app

基于 Angular 2 框架与 Material2 设计开发一套面向后台通用模板库

### 基本功能
- 谷歌 Material 设计
- 响应式设计
- 内置3套主题，供自由切换
- 多种颜色方案，有18个预定义的方案
- Flex Layout 强大的布局设置
- 1500+ 图标, 包括 900+ 官方 material design 图标
- Sass/Scss CSS, 很容易通过改变一些变量的更新
- 模块代码，添加和删除非常轻松
- Webpack 2 构建项目
- 通过 NPM 管理包
- 跨浏览器支持
- 免费更新
  `;

  constructor() { }

  ngOnInit() {
  }

  onMarkDownTriggered($event) {
    this.markdown = $event;
  }

}
