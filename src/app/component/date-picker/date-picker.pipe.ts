import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePicker'
})
export class DatePickerPipe implements PipeTransform {

  private localConfig = {
    dayAbbreviation: ['日', '一', '二', '三', '四', '五', '六'],
    dayList: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    monthList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    monthLongList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  };


  transform(value: any, args?: any): any {
    if (args === 'undefined') {
      args = 'formatMonth';
    }

    return this[args](value);
  }

  formatMonth(date) {
    return `${date.getFullYear()} ${this.localConfig.monthLongList[date.getMonth()]}`;
  }

  formatDisplay(date) {
    const day = date.getDate();
    return `${this.localConfig.monthList[date.getMonth()]}-${day > 9 ? day : '0' + day} ${this.localConfig.dayList[date.getDay()]}`;
  }

  formatDay(date) {
    return date && date.getDate();
  }
}
