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
        logo:'bg-light',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-dark',
        header:'bg-dark',
        slider:'bg-light',
        body:''
      },
      {
        logo:'bg-primary',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-primary',
        header:'bg-primary',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-primary',
        header:'bg-primary',
        slider:'bg-light',
        body:''
      },
      {
        logo:'bg-success',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-success',
        header:'bg-success',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-success',
        header:'bg-success',
        slider:'bg-light',
        body:''
      },
      {
        logo:'bg-info',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-info',
        header:'bg-info',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-info',
        header:'bg-info',
        slider:'bg-light',
        body:''
      },
      {
        logo:'bg-warning',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-warning',
        header:'bg-warning',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-warning',
        header:'bg-warning',
        slider:'bg-light',
        body:''
      },
      {
        logo:'bg-danger',
        header:'bg-light',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-danger',
        header:'bg-danger',
        slider:'bg-dark',
        body:''
      },
      {
        logo:'bg-danger',
        header:'bg-danger',
        slider:'bg-light',
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
