import { afterRenderEffect, ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, Renderer2, RendererStyleFlags2, viewChild } from '@angular/core';
import { VariablesItem } from '../css-variables';

@Component({
  selector: 'app-css-variables-item',
  imports: [],
  templateUrl: './css-variables-item.html',
  styleUrl: './css-variables-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssVariablesItem {
  private renderer = inject(Renderer2);

  readonly item = input.required<VariablesItem>();
  protected readonly bar = viewChild<ElementRef>('bar');

  constructor() {
    afterRenderEffect(() => {
      const element = this.bar()?.nativeElement;
      const item = this.item();

      if (!element || !item) return;

      this.renderer.setStyle(
        // access to element from template
        element,
        // style we need to implement
        '--height',
        // the value for the style
        `${item.count}px`,
        // we need this flag to get access to --variable, it would not work without this
        // if we use simple style property? we do not need this flag
        RendererStyleFlags2.DashCase
      )
    })
  }
}
