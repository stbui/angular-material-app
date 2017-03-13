import { Injectable } from '@angular/core';

@Injectable()
export class CustomizerService {

  isOpend: boolean = false;

  constructor() {
  }

  toggleQuickview() {
    console.log(this.isOpend);
    return this.isOpend = !this.isOpend;
  }

}
