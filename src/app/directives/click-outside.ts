import { Directive, ElementRef, inject, OnDestroy, output, Renderer2 } from '@angular/core';

/**
 * Negative part of directive:
 * if there an element on page with stopPropagation(), click on this element would not be determined
 */

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutside implements OnDestroy {
  /** emit outside click */
  clickOutside = output();
  /** access to host element that direective applied to (determine cklick outside or inside) */
  private readonly element = inject(ElementRef);
  /** to listen to cklick on DOM */
  private readonly renderer = inject(Renderer2);
  /** to avoid memory leaks method from renderer (remove listener when component destroyed) */
  private listener: (() => void) | null = null;
  private isFirstClick = true;

  constructor() {
    this.listener = this.renderer.listen(
      'document',
      'click',
      (e: Event) => {
        // if (this.isFirstClick) {
        //   this.isFirstClick = false;
        //   return;
        // }
        /**
         * check if click was outside the element
         * @param (e.target) - event on our element
         *  */
        if (!this.element.nativeElement.contains(e.target)) {
          this.clickOutside.emit();
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.listener?.();
  }
}
