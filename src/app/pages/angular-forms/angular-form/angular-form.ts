import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFormsMenu } from "./angular-forms-menu/angular-forms-menu";
import { ScrollIntoView } from '../../../directives/scroll-into-view';

@Component({
  selector: 'app-angular-form',
  imports: [
    RouterOutlet,
    AngularFormsMenu,
    ScrollIntoView,
  ],
  templateUrl: './angular-form.html',
  styleUrl: './angular-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularForm { }
