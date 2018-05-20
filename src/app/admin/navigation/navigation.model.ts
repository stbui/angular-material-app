export class NavigationModel {

  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'home',
        'title': '主页',
        'type': 'item',
        'icon': 'home',
        'url': '/home'
      },
      {
        'id': 'ui',
        'title': 'UI元素',
        'type': 'collapse',
        'icon': 'bubble_chart',
        'children': [
          {
            'id': 'pagination',
            'title': '分页',
            'type': 'item',
            'url': '/materials/pagination'
          },
          {
            'id': 'date-picker',
            'title': '日期选择器',
            'type': 'item',
            'url': '/materials/date-picker'
          }, {
            'id': 'modal',
            'title': '弹出框',
            'type': 'item',
            'url': '/materials/popover'
          }, {
            'id': 'buttons',
            'title': '按钮',
            'type': 'item',
            'url': '/materials/buttons'
          }, {
            'id': 'cards',
            'title': '卡片',
            'type': 'item',
            'url': '/materials/cards'
          }, {
            'id': 'lists',
            'title': '列表',
            'type': 'item',
            'url': '/materials/lists'
          }, {
            'id': 'menu',
            'title': '菜单',
            'type': 'item',
            'url': '/materials/menu'
          }, {
            'id': 'slider',
            'title': '滑块',
            'type': 'item',
            'url': '/materials/slider'
          }, {
            'id': 'tabs',
            'title': '标签页',
            'type': 'item',
            'url': '/materials/tabs'
          }, {
            'id': 'tooltips',
            'title': '文字提示',
            'type': 'item',
            'url': '/materials/tooltips'
          }, {
            'id': 'dialogs',
            'title': '对话框',
            'type': 'item',
            'url': '/materials/dialogs'
          }, {
            'id': 'icon',
            'title': '图标',
            'type': 'item',
            'url': '/materials/icon'
          }
        ]
      },
      {
        'id': 'extend',
        'title': '拓展组件',
        'type': 'collapse',
        'icon': 'equalizer',
        'badge': {
          'title': '6',
          'bg': '#ff4081',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'amap',
            'title': '高德地图',
            'type': 'item',
            'url': '/materials/amap'
          }, {
            'id': 'notification',
            'title': '通知',
            'type': 'item',
            'url': '/materials/notification'
          }, {
            'id': 'calendar',
            'title': '日历',
            'type': 'item',
            'url': '/materials/calendar'
          }, {
            'id': 'popover',
            'title': '文件上传',
            'type': 'item',
            'url': '/materials/popover'
          }, {
            'id': 'chat-widget',
            'title': 'chat-widget',
            'type': 'item',
            'url': '/materials/chat-widget'
          }, {
            'id': 'speed-dial',
            'title': 'speed-dial',
            'type': 'item',
            'url': '/materials/chat-widget'
          }
        ]
      },
      {
        'id': 'forms',
        'title': '表单',
        'type': 'collapse',
        'icon': 'format_color_text',
        'badge': {
          'title': '2',
          'bg': '#ff6f00',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'elements',
            'title': '表单元素',
            'type': 'item',
            'url': '/forms/elements'
          }, {
            'id': 'validation',
            'title': '表单验证',
            'type': 'item',
            'url': '/forms/validation'
          }, {
            'id': 'editor',
            'title': '编辑器',
            'type': 'item',
            'url': '/forms/editor'
          }
        ]
      },
      {
        'id': 'table',
        'title': '表格',
        'type': 'collapse',
        'icon': 'list',
        'children': [
          {
            'id': 'static',
            'title': '基本表格',
            'type': 'item',
            'url': '/tables/static'
          }, {
            'id': 'datatable',
            'title': '数据表格',
            'type': 'item',
            'url': '/tables/datatable'
          }, {
            'id': 'dynamic',
            'title': '动态表格',
            'type': 'item',
            'url': '/tables/dynamic'
          }
        ]
      }, {
        'id': 'pages',
        'title': '页面',
        'type': 'collapse',
        'icon': 'content_copy',
        'children': [
          {
            'id': 'file-manager',
            'title': '文件管理',
            'type': 'item',
            'url': '/pages/file-manager'
          }, {
            'id': 'projects',
            'title': '项目管理',
            'type': 'item',
            'url': '/pages/projects'
          }, {
            'id': 'profile',
            'title': '个人资料',
            'type': 'item',
            'url': '/pages/profile'
          }, {
            'id': 'blog',
            'title': '博客',
            'type': 'item',
            'url': '/pages/blog'
          }, {
            'id': 'user',
            'title': '用户管理',
            'type': 'item',
            'url': '/pages/user'
          }
        ]
      }, {
        'id': 'extend',
        'title': '扩展页面',
        'type': 'collapse',
        'icon': 'more_horiz',
        'children': [
          {
            'id': 'sigin',
            'title': '登录',
            'type': 'item',
            'url': '/sigin'
          }, {
            'id': 'sigup',
            'title': '注册',
            'type': 'item',
            'url': '/sigup'
          }
        ]
      }, {
        'id': 'page-layouts',
        'title': '页面布局',
        'type': 'collapse',
        'icon': 'view_quilt',
        'badge': {
          'title': 'new',
          'bg': '#ff9800',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'carded-full-width',
            'title': '卡片式',
            'type': 'item',
            'url': '/page-layouts/carded/full-width'
          }
        ]
      }, {
        'id': 'apps',
        'title': '应用',
        'type': 'collapse',
        'icon': 'apps',
        'children': [
          {
            'id': 'todo',
            'title': '任务',
            'type': 'item',
            'url': '/apps/todo/ALL'
          }, {
            'id': 'chats',
            'title': '聊天',
            'type': 'item',
            'url': '/apps/chats'
          }, {
            'id': 'mail',
            'title': '信箱',
            'type': 'item',
            'url': '/apps/mail'
          }, {
            'id': 'navigation',
            'title': '码农庄园',
            'type': 'item',
            'url': '/apps/navigation',
            'badge': {
              'title': '10',
              'bg': '#ff6f00',
              'fg': '#fff'
            }
          }
        ]
      }, {
        'id': 'analysis',
        'title': '数据分析',
        'type': 'collapse',
        'icon': 'poll',
        'children': [
          {
            'id': 'crowd',
            'title': '人群分布',
            'type': 'item',
            'url': '/analysis/crowd'
          }, {
            'id': 'preference',
            'title': '行为偏好',
            'type': 'item',
            'url': '/analysis/preference'
          }, {
            'id': 'population',
            'title': '人口分布',
            'type': 'item',
            'url': '/analysis/population'
          }, {
            'id': 'equipment',
            'title': '设备分布',
            'type': 'item',
            'url': '/analysis/equipment'
          }, {
            'id': 'scePortrait',
            'title': '场景画像',
            'type': 'item',
            'url': '/analysis/scePortrait'
          }
        ]
      }, {
        'id': 'crm',
        'title': '客户关系',
        'type': 'collapse',
        'icon': 'business',
        'children': [
          {
            'id': 'lead',
            'title': '线索',
            'type': 'item',
            'url': '/crm/lead'
          }, {
            'id': 'contacts',
            'title': '联系人',
            'type': 'item',
            'url': '/crm/contacts'
          }
        ]
      }, {
        'id': 'apm',
        'title': '前端监控',
        'type': 'collapse',
        'icon': 'code',
        'children': [
          {
            'id': 'error',
            'title': '脚本异常',
            'type': 'item',
            'url': '/apm/error'
          }, {
            'id': 'performance',
            'title': '性能分析',
            'type': 'item',
            'url': '/apm/performance'
          }
        ]
      }
    ];
  }

}
