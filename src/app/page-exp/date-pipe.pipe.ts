import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  monthsConv = {
    1: 'January',
    2: 'Febuary',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  transform(date: string[], ...args: unknown[]): unknown {
    return date.reduce((acc = '', date) => {
      return (
        acc +
        `${acc === '' ? '' : ' - '}${
          this.monthsConv[parseInt(date.split('/')[0])] +
          ' ' +
          date.split('/')[2]
        }`
      );
    }, undefined);
  }
}
