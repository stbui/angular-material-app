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
        id: 'script',
        title: '脚本异常',
        type: 'item',
        icon: 'cancel',
        url: '/apm/script'
      },
      {
        id: 'collection',
        title: 'AJAX性能',
        type: 'item',
        icon: 'subtitles',
        url: '/apm/collection'
      },
      {
        id: 'performance',
        title: '页面性能',
        type: 'item',
        icon: 'av_timer',
        url: '/apm/performance'
      },
      {
        id: 'track',
        title: '资源追踪',
        type: 'item',
        icon: 'traffic',
        url: '/apm/track'
      },
      {
        id: 'behavior',
        title: '用户行为',
        type: 'item',
        icon: 'person_pin',
        url: '/apm/behavior'
      },
      {
        id: 'diagram',
        title: '流量热力图',
        type: 'item',
        icon: 'map',
        url: '/apm/diagram'
      },
      {
        id: 'alarm',
        title: '应用告警',
        type: 'item',
        icon: 'alarm',
        badge: {
          title: '10',
          bg: '#ff4081',
          fg: '#fff'
        },
        url: '/apm/alarm'
      },
      {
        id: 'manage',
        title: '应用列表',
        type: 'item',
        icon: 'laptop',
        url: '/apm/manage'
      }
    ];
  }
}
