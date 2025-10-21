import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AmountInputComponent } from './components/amount-input/amount-input';
import { AccountInfoComponent } from './components/account-info/account-info';

type FormValues = {
  pastDueToday: number;
  repossessionFees: number;
  nsfFees: number;
  lateFees: number;
  keyFees: number;
  salesTaxes: number;
  additionalFees: number;
  includeAdditionalFees: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AmountInputComponent, AccountInfoComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  title = 'Reinstatement Guide';
  showSuccess = signal(false);
  activeTab = signal<'loan' | 'customer'>('loan');

  form: any;

  totalFees = computed(() => {
    const v = this.form.getRawValue() as FormValues;
    const base = v.repossessionFees + v.nsfFees + v.lateFees + v.keyFees + v.salesTaxes;
    return base + (v.includeAdditionalFees ? v.additionalFees : 0);
  });
  pastDue = computed(() => this.form.controls['pastDueToday'].value || 0);
  totalDue = computed(() => this.pastDue() + this.totalFees());

  paymentAmount = 504.44;
  frequency = 'Monthly';

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form after DI is ready to avoid TS2729
    // Seed defaults to show meaningful values in Account Information
    this.form = this.formBuilder.nonNullable.group({
      pastDueToday: [2425.10, [Validators.required, Validators.min(0)]],
      repossessionFees: [100.00, [Validators.required, Validators.min(0)]],
      nsfFees: [25.10, [Validators.required, Validators.min(0)]],
      lateFees: [30.00, [Validators.required, Validators.min(0)]],
      keyFees: [10.00, [Validators.required, Validators.min(0)]],
      salesTaxes: [28.03, [Validators.required, Validators.min(0)]],
      additionalFees: [{ value: 0, disabled: true }, [Validators.required, Validators.min(0)]],
      includeAdditionalFees: [false]
    });

    // Toggle enable/disable of Additional Fees based on switch
    const includeCtrl = this.form.controls['includeAdditionalFees'];
    const addlCtrl = this.form.controls['additionalFees'];
    includeCtrl.valueChanges.subscribe((on: boolean) => {
      if (on) {
        addlCtrl.enable({ emitEvent: false });
      } else {
        addlCtrl.disable({ emitEvent: false });
      }
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    console.log('SUBMIT PAYLOAD:', JSON.stringify(this.form.getRawValue()));
    this.showSuccess.set(true);
    setTimeout(() => this.showSuccess.set(false), 2000);
  }

}
