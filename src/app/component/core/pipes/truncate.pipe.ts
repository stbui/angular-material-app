import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, length?: any): any {
    if (typeof value !== 'string') {
      return '';
    }

    let truncated: string = value.substr(0, length);

    if (value.length > length) {
      if (truncated.lastIndexOf(' ') > 0) {
        truncated = truncated.trim();
      }

      truncated += '…';
    }

    return truncated;
  }
}
