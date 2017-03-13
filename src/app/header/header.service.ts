import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor() {
    console.log('HeaderService')
  }

  getTheme() {
    return {
      'bg-light': false,
      'bg-dark': false,
      'bg-primary': true,
      'bg-success': false,
      'bg-info': false,
      'bg-warning': false,
      'bg-danger': false
    };

  }

}
