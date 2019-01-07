export class NavigationModel {
  public model: any[];

  constructor() {
    this.model = [
      {
        id: 'dashboard',
        title: '主页',
        type: 'item',
        icon: 'home',
        url: '/shield/dashboard'
      },
      {
        id: 'behavior',
        title: '节点管理',
        type: 'item',
        icon: 'person_pin',
        url: '/shield/behavior'
      },
      {
        id: 'diagram',
        title: '运营管理',
        type: 'item',
        icon: 'map',
        url: '/shield/diagram'
      },
      {
        id: 'script',
        title: '账户充值',
        type: 'item',
        icon: 'cancel',
        url: '/shield/script'
      },
      {
        id: 'collection',
        title: '购买记录',
        type: 'item',
        icon: 'subtitles',
        url: '/shield/collection'
      },
      {
        id: 'performance',
        title: '套餐购买',
        type: 'item',
        icon: 'av_timer',
        url: '/shield/performance'
      },
      {
        id: 'track',
        title: '工单管理',
        type: 'item',
        icon: 'traffic',
        url: '/shield/track'
      }

      // {
      //   id: 'alarm',
      //   title: '应用告警',
      //   type: 'item',
      //   icon: 'alarm',
      //   badge: {
      //     title: '10',
      //     bg: '#ff4081',
      //     fg: '#fff'
      //   },
      //   url: '/shield/alarm'
      // },
      // {
      //   id: 'manage',
      //   title: '应用列表',
      //   type: 'item',
      //   icon: 'laptop',
      //   url: '/shield/manage'
      // }
    ];
  }
}
