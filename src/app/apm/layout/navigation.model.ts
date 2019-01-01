export class NavigationModel {
  public model: any[];

  constructor() {
    this.model = [
      {
        id: 'dashboard',
        title: '主页',
        type: 'item',
        icon: 'home',
        url: '/apm/dashboard'
      },
      {
        id: 'manage',
        title: '应用管理',
        type: 'item',
        icon: 'laptop',
        url: '/apm/manage'
      },
      {
        id: 'script',
        title: '脚本异常',
        type: 'item',
        icon: 'traffic',
        url: '/apm/script'
      },
      {
        id: 'collection',
        title: '数据采集',
        type: 'item',
        icon: 'subtitles',
        url: '/apm/collection'
      },
      {
        id: 'performance',
        title: '性能分析',
        type: 'item',
        icon: 'av_timer',
        url: '/apm/performance'
      }
    ];
  }
}
