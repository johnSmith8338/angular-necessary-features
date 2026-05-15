import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { MenuItem, MenuSvc } from './services/menu-svc';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-necessary-features');

  private menuSvc = inject(MenuSvc);
  private router = inject(Router);

  menuItems = signal<MenuItem[]>(this.menuSvc.getMenuItems());
  menuOpened = signal(false);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuOpened.set(false);
    })
  }

  toggleMenu() {
    this.menuOpened.update(val => !val);
  }

  closeMenu() {
    this.menuOpened.set(false);
  }
}
