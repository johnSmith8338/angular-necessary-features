import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[appScrollIntoView]',
})
export class ScrollIntoView {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {

      requestAnimationFrame(() => {
        this.scrollToActive();
      });

    });
  }

  private scrollToActive(): void {
    const active =
      this.host.nativeElement.querySelector('.active');

    if (!(active instanceof HTMLElement)) {
      return;
    }

    active.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
}
