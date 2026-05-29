import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormDebugPanel } from "../form-debug-panel/form-debug-panel";

interface ProfileForm {
  account: FormGroup<{
    name: FormControl<string>;
    lastName: FormControl<string>;
  }>
  address: FormGroup<{
    street: FormControl<string>;
  }>
  preferences: FormGroup<{
    option: FormControl<boolean>;
  }>
}

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, FormDebugPanel],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveForm {
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
      })
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
