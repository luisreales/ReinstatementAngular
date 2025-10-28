import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-amount-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './amount-input.html'
})
export class AmountInputComponent {
  @Input({ required: true }) formCtrl!: FormControl<number>;
  @Input() label = 'Amount';
}
