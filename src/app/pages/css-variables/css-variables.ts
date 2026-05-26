import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CssVariablesItem } from "./css-variables-item/css-variables-item";
import { CssVariablesHost } from "./css-variables-host/css-variables-host";

export interface VariablesItem {
  count: number;
  color: string;
  bg: string;
}

@Component({
  selector: 'app-css-variables',
  imports: [CssVariablesItem, CssVariablesHost],
  templateUrl: './css-variables.html',
  styleUrl: './css-variables.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssVariables {
  protected items = signal<VariablesItem[]>([
    {
      count: 100,
      bg: '#335c67',
      color: '#ffffff'
    },
    {
      count: 160,
      bg: '#fff3b0',
      color: '#333333'
    },
    {
      count: 130,
      bg: '#e09f3e',
      color: '#333333'
    },
    {
      count: 80,
      bg: '#9e2a2b',
      color: '#ffffff'
    },
    {
      count: 120,
      bg: '#540b0e',
      color: '#ffffff'
    }
  ])
}
