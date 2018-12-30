export class NavigationModel {
  public model: any[];

  constructor() {
    this.model = [
      {
        id: 'home',
        title: '主页',
        type: 'item',
        icon: 'home',
        url: '/home'
      },

      {
        id: 'customer',
        title: '客户管理',
        type: 'collapse',
        icon: 'widgets',
        children: [
          {
            id: 'lead',
            title: '线索',
            type: 'item',
            url: '/crm/lead'
          },
          {
            id: 'contacts',
            title: '联系人',
            type: 'item',
            url: '/crm/contacts'
          },
          {
            id: 'opportunities',
            title: '商机',
            type: 'item',
            url: '/crm/contacts'
          },
          {
            id: 'follow',
            title: '跟进',
            type: 'item',
            url: '/crm/contacts'
          },
          {
            id: 'product',
            title: '产品',
            type: 'item',
            url: '/crm/contacts'
          },
          {
            id: 'contract',
            title: '合同',
            type: 'item',
            url: '/crm/contacts'
          },
          {
            id: 'received',
            title: '回款',
            type: 'item',
            url: '/crm/contacts'
          }
        ]
      },
      {
        id: 'office',
        title: '办公管理',
        type: 'collapse',
        icon: 'desktop_mac',
        children: [
          {
            id: 'schedule_reports',
            title: '工作报告',
            type: 'item',
            url: '/apm/error'
          },
          {
            id: 'task',
            title: '任务管理',
            type: 'item',
            url: '/apm/error'
          },
          {
            id: 'check',
            title: '审批管理',
            type: 'item',
            url: '/apm/error'
          }
        ]
      },
      {
        id: 'report_center',
        title: '统计报表',
        type: 'collapse',
        icon: 'pie_chart',
        children: [
          {
            id: 'customrank',
            title: '业绩排行',
            type: 'item',
            url: '/apm/error'
          },
          {
            id: 'productreport',
            title: '产品销量',
            type: 'item',
            url: '/apm/error'
          }
        ]
      },
      {
        id: 'system',
        title: '系统设置',
        type: 'collapse',
        icon: 'settings',
        children: [
          {
            id: 'profile',
            title: '个人设置',
            type: 'item',
            url: '/apm/error'
          },
          {
            id: 'teamconfig',
            title: '公司信息',
            type: 'item',
            url: '/apm/error'
          },
          {
            id: 'teammember',
            title: '部门与员工',
            type: 'item',
            url: '/apm/error'
          }
        ]
      }
    ];
  }
}
