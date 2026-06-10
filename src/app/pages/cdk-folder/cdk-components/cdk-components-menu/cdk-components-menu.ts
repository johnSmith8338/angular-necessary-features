import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cdk-components-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cdk-components-menu.html',
  styleUrl: './cdk-components-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkComponentsMenu {
  private readonly route = inject(ActivatedRoute);

  protected readonly menuItem = signal(
    this.route.routeConfig?.children?.filter(route => route.data?.['title'])
      .map(route => ({
        title: route.data?.['title'],
        link: route.path,
      })) ?? []
  )
}
