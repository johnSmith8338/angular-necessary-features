import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-cdk-modal-form',
  imports: [ReactiveFormsModule],
  templateUrl: './cdk-modal-form.html',
  styleUrl: './cdk-modal-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkModalForm {
  /** inject dialogRef to get to opened dialog reference */
  private dialogRef = inject(DialogRef, { optional: true });

  protected signUp = new FormGroup<SignUpForm>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ],
    }),
  })

  protected closeModal() {
    this.dialogRef?.close();
  }
}
