import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const time = new Date(value);
    let ref: Date = new Date(args);

    if (!time.getTime()) {
      return 'Invalid Date';
    }

    let startTime: number = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
    let diff: number = Math.floor((startTime - time.getTime()) / 1000);

    if (diff < 2) {
      return '1 秒前';
    }
    if (diff < 60) {
      return Math.floor(diff) + ' 秒前';
    }

    diff = diff / 60;
    if (diff < 2) {
      return '1 分钟前';
    }
    if (diff < 60) {
      return Math.floor(diff) + ' 分钟前';
    }

    diff = diff / 60;
    if (diff < 2) {
      return '1 小时前';
    }
    if (diff < 24) {
      return Math.floor(diff) + ' 小时前';
    }

    diff = diff / 24;
    if (diff < 2) {
      return '1 天前';
    }
    if (diff < 30) {
      return Math.floor(diff) + ' 天前';
    }

    diff = diff / 30;
    if (diff < 2) {
      return '1 月前';
    }
    if (diff < 12) {
      return Math.floor(diff) + ' 月前';
    }

    diff = diff / 12;
    if (diff < 2) {
      return '1 年前';
    } else {
      return Math.floor(diff) + ' 年前';
    }
  }
}
