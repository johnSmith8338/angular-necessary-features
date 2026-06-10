import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgChartTemplate } from "./svg-chart-template/svg-chart-template";

export interface ChartItems {
  count: number;
  label: string;
}

@Component({
  selector: 'app-svg-template',
  imports: [SvgChartTemplate],
  templateUrl: './svg-template.html',
  styleUrl: './svg-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTemplate {
  fruit: ChartItems[] = [
    {
      count: 4,
      label: 'apples'
    },
    {
      count: 8,
      label: 'bananas'
    },
    {
      count: 15,
      label: 'kiwis'
    },
    {
      count: 16,
      label: 'oranges'
    },
    {
      count: 23,
      label: 'lemons'
    },
  ]

  cars: ChartItems[] = [
    {
      count: 12,
      label: 'toyota'
    },
    {
      count: 6,
      label: 'ford'
    },
    {
      count: 21,
      label: 'chevrolet'
    },
    {
      count: 3,
      label: 'bmv'
    },
    {
      count: 17,
      label: 'lexus'
    },
    {
      count: 13,
      label: 'tesla'
    },
    {
      count: 8,
      label: 'kia'
    },
    {
      count: 19,
      label: 'dodge'
    },
  ]
}
