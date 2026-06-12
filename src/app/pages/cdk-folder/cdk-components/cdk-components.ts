import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkComponentsMenu } from "./cdk-components-menu/cdk-components-menu";
import { RouterOutlet } from "@angular/router";
import { ScrollIntoView } from '../../../directives/scroll-into-view';

@Component({
  selector: 'app-cdk-components',
  imports: [
    CdkComponentsMenu,
    RouterOutlet,
    ScrollIntoView,
  ],
  templateUrl: './cdk-components.html',
  styleUrl: './cdk-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkComponents { }
