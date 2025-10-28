import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customCurrency',
    standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {
    transform(value: number | null | undefined, currencyCode: string = 'USD', display: string = 'symbol', digitsInfo: string = '1.2-2'): string {
        if (value == null) return '';

        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);

        return formatted;
    }
}