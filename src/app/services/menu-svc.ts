import { inject, Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

export interface MenuItem {
  title: string;
  link: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuSvc {
  private router = inject(Router);

  getMenuGroups(): MenuGroup[] {
    const groups = new Map<string, MenuItem[]>();
    this.collectRoutes(this.router.config, groups);
    return [...groups.entries()].map(([title, items]) => ({
      title,
      items
    }))
  }

  private collectRoutes(routes: Routes, groups: Map<string, MenuItem[]>, parentPath = '') {
    for (const route of routes) {
      const currentPath = route.path ? `${parentPath}/${route.path}` : parentPath;
      if (route.data?.['group']) {
        const groupName = route.data['group'];
        if (!groups.has(groupName)) groups.set(groupName, []);
        groups.get(groupName)?.push({
          title: route.data['title'],
          link: currentPath
        })
      }

      if (route.children) {
        this.collectRoutes(route.children, groups, currentPath)
      }
    }
  }
}
