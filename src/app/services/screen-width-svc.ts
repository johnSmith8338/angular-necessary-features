import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEventPattern, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenWidthSvc {
  private readonly mediaQuery = window.matchMedia('(max-width: 1024px)');

  readonly isMobile = toSignal(
    fromEventPattern<MediaQueryListEvent>(
      handler => this.mediaQuery.addEventListener('change', handler),
      handler => this.mediaQuery.removeEventListener('change', handler)
    ).pipe(
      map(event => event.matches),
      startWith(this.mediaQuery.matches)
    ),
    {
      initialValue: this.mediaQuery.matches,
    }
  );
}
