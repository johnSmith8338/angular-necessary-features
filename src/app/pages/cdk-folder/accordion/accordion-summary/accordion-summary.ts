import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionContent } from '../accordion';

@Component({
  selector: 'app-accordion-summary',
  imports: [],
  templateUrl: './accordion-summary.html',
  styleUrl: './accordion-summary.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionSummary {
  readonly item = input.required<AccordionContent>();
}
