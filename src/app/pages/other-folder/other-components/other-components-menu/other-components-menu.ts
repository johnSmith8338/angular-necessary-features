import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-other-components-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './other-components-menu.html',
  styleUrl: './other-components-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherComponentsMenu {
  private readonly route = inject(ActivatedRoute);

  protected readonly menuItem = signal(
    this.route.routeConfig?.children?.filter(route => route.data?.['title'])
      .map(route => ({
        title: route.data?.['title'],
        link: route.path,
      })) ?? []
  )
}
