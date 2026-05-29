import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-form-debug-panel',
  imports: [JsonPipe],
  templateUrl: './form-debug-panel.html',
  styleUrl: './form-debug-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDebugPanel {
  private readonly destroyRef = inject(DestroyRef);

  readonly form = input.required<FormGroup>();

  readonly formValue = signal<Record<string, unknown> | null>(null);
  readonly formValid = signal(false);
  readonly formStatus = signal('PENDING');
  readonly formErrors = signal<ValidationErrors | null>(null);
  readonly formTouched = signal(false);
  readonly formDirty = signal(false);

  readonly controlsErrors = computed(() => {
    const formGroup = this.form();

    return Object.entries(formGroup.controls).reduce((acc, [key, control]) => {
      if (control.errors) acc[key] = control.errors;
      return acc;
    }, {} as Record<string, unknown>)
  })

  readonly hasControlErrors = computed(() => Object.keys(this.controlsErrors()).length > 0);

  constructor() {
    effect((onCleanup) => {
      const formGroup = this.form();

      const updateAll = () => {
        this.formValue.set(formGroup.value);
        this.formValid.set(formGroup.valid);
        this.formStatus.set(formGroup.status);
        this.formErrors.set(formGroup.errors);
        this.formTouched.set(formGroup.touched);
        this.formDirty.set(formGroup.dirty);
      }

      updateAll();

      const subscription = merge(formGroup.valueChanges, formGroup.statusChanges).pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => updateAll())

      onCleanup(() => subscription.unsubscribe())
    })
  }
}
