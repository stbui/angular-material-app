import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() {
  }

  getMenus() {
    let menu = [
      {
        "name": "Dashboard",
        "icon": "home",
        "links": "dashboard"
      },
      {
        "name": "UI Kit",
        "icon": "bubble_chart",
        "items": [
          {
            "name": "Buttons",
            "badeg": 3,
            "links": "/buttons"
          },
          {
            "name": "Cards",
            "links": "/cards"
          },
          {
            "name": "Boxes",
            "links": "#"
          },

          {
            "name": "Components",
            "links": "#"
          },
          {
            "name": "Feature Callouts",
            "links": "#"
          },
          {
            "name": "Toast",
            "links": "toast"
          }
        ]
      },
      {
        "name": "Tables",
        "icon": "list",
        "items": [
          { "name": "Static Tables", "links": "tables/static"},
          // { "name": "Responsive Tables", "links": "tables/responsive"},
          { "name": "Datatable", "links":"tables/datatable"}
        ]
      },
      {
        "name": "Forms",
        "icon": "format_color_text",
        "items": [
          { "name": "Form Elements","links":"forms/elements"},
          { "name": "Form validation","links":"forms/validation"},
          { "name": "Ckeditor","links":"forms/ckeditor"}
        ]
      },
      {
        "name": "Charts",
        "icon": "equalizer",
        "links": "chart"
      },
      {
        "name": "Pages",
        "icon": "content_copy",
        "items": [
          {
            "name":"about",
            "links":"about"
          },
          {
            "name":"services",
            "links":"services"
          },
          {
            "name":"contact",
            "links":"contact"
          },
          {
            "name":"careers",
            "links":"careers"
          },
          {
            "name":"profile",
            "links":"profile"
          },
          {
            "name":"blog",
            "links":"blog"
          },
          {
            "name":"faqs",
            "links":"faqs"
          },
          {
            "name":"terms",
            "links":"terms"
          }
        ]
      },
      {"name":"Extra Pages", "icon":"more_horiz", "items": [
        {"name":"Sigin In", "links":"signin"},
        {"name":"Sigin Up", "links":"signup"},
        {"name":"404 Error", "links":"404"}
      ]},
      {
        "name": "Apps",
        "icon": "apps",
        "items": [
          {
            "name": "Task",
            "links": "todo"
          }
        ]
      }
    ];

    return menu;
  }

}
