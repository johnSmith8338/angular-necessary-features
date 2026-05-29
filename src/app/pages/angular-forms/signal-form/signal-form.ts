import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormDebugPanel } from "../form-debug-panel/form-debug-panel";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SignalFormControl } from '@angular/forms/signals/compat';
import { FormField, pattern, required } from '@angular/forms/signals';

interface ProfileForm {
  account: FormGroup<{
    name: FormControl<string>;
    lastName: FormControl<string>;
  }>
  address: FormGroup<{
    street: FormControl<string>;

    /** for signal form */
    city: SignalFormControl<string>;
    state: SignalFormControl<string>;
    zip: SignalFormControl<string>;
  }>
  preferences: FormGroup<{
    option: FormControl<boolean>;
  }>
}

@Component({
  selector: 'app-signal-form',
  imports: [FormDebugPanel, ReactiveFormsModule, FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormHybrid {
  readonly city = new SignalFormControl('', schema => {
    required(schema, { message: 'City is required' });
  })
  readonly state = new SignalFormControl('', schema => {
    required(schema, { message: 'State is required' });
  })
  readonly zip = new SignalFormControl('', schema => {
    required(schema, { message: 'Zip code is required' });
    pattern(schema, /^\d{5}$/, { message: 'Zip code must be 5 digits' });
  })
  readonly form = new FormGroup<ProfileForm>({
    account: new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true
      })
    }),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true
      }),

      city: this.city,
      state: this.state,
      zip: this.zip
    }),
    preferences: new FormGroup({
      option: new FormControl(false, { nonNullable: true })
    })
  })

  protected onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      alert(`Form submited`);
    }
  }
}
