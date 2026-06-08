import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AriaTabsHorizontal } from "./aria-tabs-horizontal/aria-tabs-horizontal";
import { AriaTabsVertical } from "./aria-tabs-vertical/aria-tabs-vertical";

@Component({
  selector: 'app-aria-tabs',
  imports: [AriaTabsHorizontal, AriaTabsVertical],
  templateUrl: './aria-tabs.html',
  styleUrl: './aria-tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaTabs { }
