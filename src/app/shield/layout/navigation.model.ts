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
        id: 'nodes',
        title: '节点管理',
        type: 'item',
        icon: 'person_pin',
        url: '/shield/nodes'
      },
      {
        id: 'operator',
        title: '运营管理',
        type: 'item',
        icon: 'map',
        url: '/shield/operator'
      },
      {
        id: 'payment',
        title: '账户充值',
        type: 'item',
        icon: 'cancel',
        url: '/shield/payment'
      },
      {
        id: 'record',
        title: '购买记录',
        type: 'item',
        icon: 'subtitles',
        url: '/shield/record'
      },
      {
        id: 'purchase',
        title: '套餐购买',
        type: 'item',
        icon: 'av_timer',
        url: '/shield/purchase'
      },
      {
        id: 'workorder',
        title: '工单管理',
        type: 'item',
        icon: 'traffic',
        url: '/shield/workorder'
      }
    ];
  }
}
