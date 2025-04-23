import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDecimalFormat]',
  standalone: true,
})
export class DecimalFormatDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    let valueWithoutCommas = value.replace(/,/g, '');
    const hasDot = valueWithoutCommas.includes('.');

    let [integerPart, decimalPart = ''] = valueWithoutCommas.split('.');
    integerPart = integerPart.replace(/\D/g, '');
    decimalPart = decimalPart.replace(/\D/g, '').substring(0, 2);

    const formattedInteger = integerPart ? Number(integerPart).toLocaleString('en-US') : '';

    let formattedValue = formattedInteger;
    if (hasDot) {
      formattedValue += '.';
    }
    if (decimalPart) {
      formattedValue += decimalPart;
    }

    this.control.control?.setValue(formattedValue, { emitEvent: false });

    setTimeout(() => {
      const pos = formattedValue.length;
      input.setSelectionRange(pos, pos);
    });
  }
}