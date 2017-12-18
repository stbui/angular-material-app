export class NavigationModel {

  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'dashboard',
        'title': 'dashboard',
        'type': 'collapse',
        'icon': 'apps',
        'children': [
          {
            'id': 'test',
            'title': 'test',
            'type': 'item',
            'url': '/app'
          }
        ]
      },
      {
        'id': 'dashboard2',
        'title': 'dashboard2',
        'type': 'collapse',
        'icon': 'apps',
        'badge': {
          'title': '10',
          'bg': '#ccc',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'test2',
            'title': 'test2',
            'type': 'item',
            'url': '/app'
          }
        ]
      }
    ];
  }
}
