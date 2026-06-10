import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeferCard } from './defer-card/defer-card';

@Component({
  selector: 'app-defer-loading',
  imports: [DeferCard],
  templateUrl: './defer-loading.html',
  styleUrl: './defer-loading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferLoading {
  protected cards = Array.from({ length: 4 });
}
