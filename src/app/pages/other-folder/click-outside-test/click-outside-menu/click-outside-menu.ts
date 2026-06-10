import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ClickOutside } from '../../../../directives/click-outside';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem, MenuSvc } from '../../../../services/menu-svc';

@Component({
  selector: 'app-click-outside-menu',
  imports: [
    ClickOutside,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './click-outside-menu.html',
  styleUrl: './click-outside-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickOutsideMenu {
  private readonly route = inject(ActivatedRoute);
  private readonly menuSvc = inject(MenuSvc);

  protected readonly isOpen = signal(false);

  readonly menuItem = this.menuSvc.getGroup('OTHER');
}
