import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { VariablesItem } from '../css-variables';

@Component({
  selector: 'app-css-variables-host',
  imports: [],
  templateUrl: './css-variables-host.html',
  styleUrl: './css-variables-host.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--height]': 'item().count',
  }
})
export class CssVariablesHost {
  readonly item = input.required<VariablesItem>();
}
