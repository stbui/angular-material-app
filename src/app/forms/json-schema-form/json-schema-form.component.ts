import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-schema-form',
  templateUrl: './json-schema-form.component.html',
  styleUrls: ['./json-schema-form.component.scss']
})
export class JsonSchemaFormComponent implements OnInit {
  exampleJsonObject = {
    schema: {
      title: 'whois信息',
      description: 'whois信息',
      type: 'object',
      required: ['type_m', 'company_m'],
      properties: {
        type_m: { type: 'string', title: '注册人类型' },
        company_m: { type: 'string', title: '域名所有人' },
        name_m: { type: 'string', title: '域名联系人' },
        country: {
          title: '国家/地区',
          description: '国家',
          type: 'string',
          enum: [
            'AF - 阿富汗',
            'DZ - 阿尔及利亚',
            'AD - 安道尔市',
            'AO - 安哥拉'
          ]
        },
        province_m: { type: 'string', title: '省份' },
        city_m: { type: 'string', title: '城市' },
        address_m: { type: 'string', title: '联系地址' },
        postcode: { type: 'string', title: '邮政编码' },
        tel: { type: 'string', title: '电话' },
        fax: { type: 'string', title: '传真' },
        email: { type: 'string', title: '电子邮件' }
      }
    }
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(event) {
    console.log(event);
  }
}
