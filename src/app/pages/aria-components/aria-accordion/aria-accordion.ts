import { AccordionContent, AccordionGroup, AccordionPanel, AccordionTrigger } from '@angular/aria/accordion';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface AriaAccordionItem {
  title: string;
  text: string;
}

@Component({
  selector: 'app-aria-accordeon',
  imports: [
    AccordionGroup,
    AccordionTrigger,
    AccordionPanel,
    AccordionContent,
  ],
  templateUrl: './aria-accordion.html',
  styleUrl: './aria-accordion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaAccordion {
  protected readonly accordionItems = signal<AriaAccordionItem[]>([
    {
      title: 'Which attribute tells assistive tech whether the panel is open or closed?',
      text: 'Use aria-expanded on the button element. Set it to "true" when the content panel is visible and "false" when the content is hidden. This is a crucial state indicator for screen reader users.'
    },
    {
      title: 'How do you link the button to the content it controls?',
      text: 'Use the aria-controls attribute on the button, and set its value to match the id of the related content panel. This establishes a programmatic relationship, allowing assistive technologies to jump directly to the relevant content.'
    },
    {
      title: 'What role should the heading element containing the accordion button have?',
      text: 'The element containing the button should typically have role="heading" with an appropriate aria-level to define the structure. This ensures the accordion section is recognized as a section header, making the page structure navigable for users.'
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto vero voluptatibus provident fugiat, voluptatem ratione doloribus ab quod aliquid a consequuntur commodi ea fuga eos dignissimos ut repudiandae culpa! Sunt amet facilis eligendi doloribus dolorum nemo necessitatibus alias fugiat illum, sapiente inventore velit iure architecto molestias veniam molestiae ex! Ut, ad accusantium voluptates repellendus voluptatibus asperiores ab sunt ea, incidunt harum dolores est delectus a, voluptate tempore.'
    }
  ])
}
