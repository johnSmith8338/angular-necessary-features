import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkComponentsMenu } from "./cdk-components-menu/cdk-components-menu";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-cdk-components',
  imports: [CdkComponentsMenu, RouterOutlet],
  templateUrl: './cdk-components.html',
  styleUrl: './cdk-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkComponents { }
