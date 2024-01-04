import { Component } from '@angular/core';
import { DigitConverter } from './DigitConverter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inpText!: string;
  answer!: string;
  title = 'Digit to Text Converter';
  convert() {
    const popupElement: any = document.getElementById('popup-1');
    popupElement.classList.toggle('active');
  }
  isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };
  isLimit = (val: string): boolean => {
    if (val === '') return false;
    if (Number(val) >= 10000000) return true;
    if (Number(val) <= 0) return true;

    return false;
  };
  onClose() {
    const popupElement: any = document.getElementById('popup-1');
    popupElement.classList.remove('active');
    this.inpText = '';
  }
}
