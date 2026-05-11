import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface MenuItem {
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuSvc {
  private router = inject(Router);

  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data?.['showInMenu'])
      .map((route: Route) => ({
        title: route.data?.['title'] ?? route.path ?? '',
        link: route.path ? `/${route.path}` : '/',
      }))
  }
}
