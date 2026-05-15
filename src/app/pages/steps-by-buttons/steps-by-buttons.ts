import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { StepTracker } from "../../directives/step-tracker";

@Component({
  selector: 'app-steps-by-buttons',
  imports: [StepTracker],
  templateUrl: './steps-by-buttons.html',
  styleUrl: './steps-by-buttons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsByButtons {
  protected readonly submitted = signal(false);
  protected readonly steps = signal([
    'Main title 1',
    'Main title 2',
    'Main title 3'
  ])

  protected submit() {
    this.submitted.set(true);
  }

  protected reset() {
    this.submitted.set(false);
  }
}
