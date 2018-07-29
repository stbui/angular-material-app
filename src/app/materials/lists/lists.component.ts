import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers'
  ];

  links: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  messages = [
    {
      from: '滚动头条',
      subject: '热点君-- 每时每刻滚动更新，轻松纵览天下头条！',
      content: '每时每刻滚动更新，轻松纵览天下头条！'
    },
    {
      from: '读心方程式',
      subject: '东广新闻台',
      content:
        '生活中的心理学，新闻里的小科学，读心方程式，解开你的疑惑。我们不喝鸡汤，只聊干货！节目来源上海东广新闻台《新闻实验室》栏目。'
    },
    {
      from: '话说天下事',
      subject: '天津',
      content:
        '天津人民广播电台新闻台《话说天下事》节目，充分利用新闻台讯信资源的强势，快速点击、精辟分析国际焦点、热点问题、广罗各类新闻。天津味儿的不止有相声，还有《话说天下事》！'
    }
  ];

  folders: any = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes: any = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

  constructor() {}

  ngOnInit() {}
}
