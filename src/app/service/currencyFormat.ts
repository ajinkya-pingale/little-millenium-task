import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    let formattedValue: string;
    if (value >= 10000000) {
      formattedValue = (value / 10000000).toFixed(2) + ' Cr';
    } else if (value >= 100000) {
      formattedValue = (value / 100000).toFixed(2) + ' Lakhs';
    } else if (value >= 1000) {
      formattedValue = (value / 1000).toFixed(2) + ' Thousands';
    } else {
      formattedValue = value.toFixed(2);
    }

    return '₹' + formattedValue;
  }
}
