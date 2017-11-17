import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  markdown = '';
  source = `
# angular-material-app

基于最新Angular 4框架与Material2技术的企业级通用管理系统快速开发框架，涵盖了大量的常用组件和基础功能，您可以快速开发各种MIS系统，如CMS、OA、CRM、ERP、POS等，最大程度上帮助企业节省时间成本和费用开支。

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

  constructor() {
  }

  ngOnInit() {
  }

  onMarkDownTriggered($event) {
    this.markdown = $event;
  }

}
