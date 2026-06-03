import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AriaComponentsMenu } from "./aria-components-menu/aria-components-menu";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-aria',
  imports: [AriaComponentsMenu, RouterOutlet],
  templateUrl: './aria.html',
  styleUrl: './aria.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aria { }
