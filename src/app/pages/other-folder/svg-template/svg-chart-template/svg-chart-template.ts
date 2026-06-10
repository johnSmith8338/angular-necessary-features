import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ChartItems } from '../svg-template';

@Component({
  selector: 'app-svg-chart-template',
  imports: [],
  templateUrl: './svg-chart-template.html',
  styleUrl: './svg-chart-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgChartTemplate {
  chartItems = input.required<ChartItems[]>();
  protected activeIndex = signal<number | null>(null);

  toggleActive(index: number) {
    this.activeIndex.update(current => current === index ? null : index);
  }
}
