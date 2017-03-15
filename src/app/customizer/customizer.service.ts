import { Injectable } from '@angular/core';

@Injectable()
export class CustomizerService {

  isOpend: boolean = false;

  constructor() {
  }

  toggleQuickview() {
    return this.isOpend = !this.isOpend;
  }

  getTheme() {
    let theme = [
      {
        logo:'bg-dark',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-primary',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-success',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      }
    ];

    return theme;
  }

  selectTheme() {
    let theme = this.getTheme();

    return theme;
  }

}
