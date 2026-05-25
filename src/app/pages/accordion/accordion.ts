import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionSummary } from "./accordion-summary/accordion-summary";
import { AccordionDetails } from "./accordion-details/accordion-details";
import { CdkAccordionModule } from '@angular/cdk/accordion';

export interface AccordionContent {
  title?: string,
  info?: string,
  subtitle?: string,
  text?: string,
}

@Component({
  selector: 'app-accordion',
  imports: [AccordionSummary, AccordionDetails, CdkAccordionModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion {
  items = [
    {
      title: 'Title h2',
      info: 'Info text goes here',
      subtitle: 'Title h3',
      text: 'Text with details of this shieet'
    },
    {
      title: 'Title h2',
      info: 'Info text goes here',
      subtitle: 'Title h3',
      text: 'Text with details of this shieet'
    }
  ];
}
