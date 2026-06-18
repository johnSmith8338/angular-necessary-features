import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-countdown-with-progress',
  imports: [],
  templateUrl: './countdown-with-progress.html',
  styleUrl: './countdown-with-progress.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownWithProgress {
  private destroyRef = inject(DestroyRef);

  readonly total = 15;
  readonly warnAt = 10;
  readonly endAt = 5;

  readonly resetting = signal(false);
  readonly secondsRamain = signal(this.total);

  readonly formatedRemain = computed(() => this.formatedTime(this.secondsRamain()));

  constructor() {
    const timer = setInterval(() => {
      this.secondsRamain.update(v => Math.max(v - 1, 0));
    }, 1000)

    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  refreshSession() {
    this.resetting.set(true);
    this.secondsRamain.set(this.total);

    requestAnimationFrame(() => {
      this.resetting.set(false);
    })
  }

  private formatedTime(totalSeconds: number) {
    return new Date(totalSeconds * 1000).toISOString().slice(14, 19);
  }
}
