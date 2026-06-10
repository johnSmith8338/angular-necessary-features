import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { DummyDataSvc } from '../../../../services/dummy-data-svc';

@Component({
  selector: 'app-defer-card',
  imports: [],
  providers: [DummyDataSvc],
  templateUrl: './defer-card.html',
  styleUrl: './defer-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferCard {
  private dummyDataSvc = inject(DummyDataSvc);
  protected data = this.dummyDataSvc.dummyData;

  constructor() {
    effect(() => {
      if (!this.data()) this.dummyDataSvc.loadData();
    })
  }
}
