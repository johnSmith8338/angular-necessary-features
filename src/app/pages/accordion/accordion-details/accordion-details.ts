import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionContent } from '../accordion';

@Component({
  selector: 'app-accordion-details',
  imports: [],
  templateUrl: './accordion-details.html',
  styleUrl: './accordion-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDetails {
  readonly item = input.required<AccordionContent>();
}
