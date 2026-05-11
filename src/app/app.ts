import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { MenuItem, MenuSvc } from './services/menu-svc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-necessary-features');

  private menuSvc = inject(MenuSvc);

  menuItems = signal<MenuItem[]>(this.menuSvc.getMenuItems());
  menuOpened = signal(false);

  toggleMenu() {
    this.menuOpened.update(val => !val);
  }
}
