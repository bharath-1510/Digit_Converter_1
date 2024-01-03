import { Pipe, PipeTransform, numberAttribute } from '@angular/core';

@Pipe({ name: 'digitConverter' })
export class DigitConverter implements PipeTransform {
  ones: string[] = [
    '',
    'One ',
    'Two ',
    'Three ',
    'Four ',
    'Five ',
    'Six ',
    'Seven ',
    'Eight ',
    'Nine ',
    'Ten ',
    'Eleven ',
    'Twelve ',
    'Thirteen ',
    'Fourteen ',
    'Fifteen ',
    'Sixteen ',
    'Seventeen ',
    'Eighteen ',
    'Nineteen ',
  ];

  tens: string[] = [
    '',
    '',
    'Twenty ',
    'Thirty ',
    'Forty ',
    'Fifty ',
    'Sixty ',
    'Seventy ',
    'Eighty ',
    'Ninety ',
  ];

  suffixes: string[] = ['Hundred', 'Thousand', 'Lakhs'];
  transform(value: string): string {
    if (value !== undefined) {
      let len = value.length;
      let num = Number(value);

      return (
        this.convertToDigit(Math.floor(num / 100000), this.suffixes[2]) +
        ' ' +
        this.convertToDigit(Math.floor(num / 1000) % 100, this.suffixes[1]) +
        ' ' +
        this.convertToDigit(Math.floor(num / 100) % 10, this.suffixes[0]) +
        ' ' +
        this.convertToDigit(num % 100, '')
      );
    }
    return '';
  }
  convertToDigit(n: number, suffix: string): string {
    if (n == 0) {
      return '';
    }

    if (n > 19) {
      return this.tens[Math.floor(n / 10)] + this.ones[n % 10] + suffix;
    } else {
      return this.ones[n] + suffix;
    }
  }
}
