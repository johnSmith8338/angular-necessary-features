import { ChangeDetectionStrategy, Component, ElementRef, input, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-show-more-toggle',
  imports: [],
  templateUrl: './show-more-toggle.html',
  styleUrl: './show-more-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.expanded]': 'isExpanded()',
    '[style.--collapsedHeight]': 'collapsedHeight()',
    '[style.--expandedHeight]': 'expandedHeight()',
  }
})
export class ShowMoreToggle {
  collapsedHeight = input('50px');
  protected container = viewChild.required<ElementRef>('container');

  protected isExpanded = signal(false);
  protected expandedHeight = signal<string | null>(null);

  protected toggle() {
    this.isExpanded.update(val => !val);
    this.expandedHeight.set(this.isExpanded() ? `${this.container().nativeElement.scrollHeight}px` : null);
  }
}
