import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from '../../custom-currency.pipe';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule, CustomCurrencyPipe],
  templateUrl: './account-info.html'
})
export class AccountInfoComponent {
  @Input({ required: true }) totalDue!: number;
  @Input({ required: true }) pastDue!: number;
  @Input({ required: true }) totalFees!: number;
  @Input() paymentAmount = 0;
  @Input() frequency = 'Monthly';
}
