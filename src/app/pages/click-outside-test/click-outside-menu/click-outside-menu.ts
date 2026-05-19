import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ClickOutside } from '../../../directives/click-outside';

@Component({
  selector: 'app-click-outside-menu',
  imports: [ClickOutside],
  templateUrl: './click-outside-menu.html',
  styleUrl: './click-outside-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickOutsideMenu {
  protected readonly isOpen = signal(false);
}
