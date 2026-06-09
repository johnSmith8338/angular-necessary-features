import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { OtherComponentsMenu } from "./other-components-menu/other-components-menu";

@Component({
  selector: 'app-other-components',
  imports: [RouterOutlet, OtherComponentsMenu],
  templateUrl: './other-components.html',
  styleUrl: './other-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherComponents { }
