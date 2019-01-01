export class NavigationModel {
  public model: any[];

  constructor() {
    this.model = [
      {
        id: 'home',
        title: '主页',
        type: 'item',
        icon: 'home',
        url: '/crm/dashboard'
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
            url: '/crm/opportunities'
          },
          {
            id: 'follow',
            title: '跟进',
            type: 'item',
            url: '/crm/follow'
          },
          {
            id: 'product',
            title: '产品',
            type: 'item',
            url: '/crm/product'
          },
          {
            id: 'contract',
            title: '合同',
            type: 'item',
            url: '/crm/contract'
          },
          {
            id: 'received',
            title: '回款',
            type: 'item',
            url: '/crm/received'
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
            url: '/crm/schedule_reports'
          },
          {
            id: 'task',
            title: '任务管理',
            type: 'item',
            url: '/crm/task'
          },
          {
            id: 'check',
            title: '审批管理',
            type: 'item',
            url: '/crm/check'
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
            url: '/crm/customrank'
          },
          {
            id: 'productreport',
            title: '产品销量',
            type: 'item',
            url: '/crm/productreport'
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
            url: '/crm/profile'
          },
          {
            id: 'teamconfig',
            title: '公司信息',
            type: 'item',
            url: '/crm/teamconfig'
          },
          {
            id: 'teammember',
            title: '部门与员工',
            type: 'item',
            url: '/crm/teammember'
          }
        ]
      }
    ];
  }
}
