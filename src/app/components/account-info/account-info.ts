import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top metrics: big numbers with labels below, centered -->
    <div class="grid grid-cols-3 gap-6 text-center">
      <div>
        <div class="text-2xl font-semibold">{{ totalDue | currency:'USD':'symbol':'1.2-2' }}</div>
        <div class="text-slate-500 text-sm">Total Due</div>
      </div>
      <div>
        <div class="text-2xl font-semibold">{{ pastDue | currency:'USD':'symbol':'1.2-2' }}</div>
        <div class="text-slate-500 text-sm">Past Due</div>
      </div>
      <div>
        <div class="text-2xl font-semibold">{{ totalFees | currency:'USD':'symbol':'1.2-2' }}</div>
        <div class="text-slate-500 text-sm">Total Fees</div>
      </div>
    </div>

    <!-- Details -->
    <div class="mt-6 text-sm grid grid-cols-1 gap-2">
      <div class="flex items-baseline gap-3">
        <span class="text-slate-500 w-40">Payment Amount:</span>
        <strong>{{ paymentAmount | currency:'USD' }}</strong>
      </div>
      <div class="flex items-baseline gap-3">
        <span class="text-slate-500 w-40">Frequency:</span>
        <strong>{{ frequency }}</strong>
      </div>
    </div>
  `
})
export class AccountInfoComponent {
  @Input({ required: true }) totalDue!: number;
  @Input({ required: true }) pastDue!: number;
  @Input({ required: true }) totalFees!: number;
  @Input() paymentAmount = 0;
  @Input() frequency = 'Monthly';
}
