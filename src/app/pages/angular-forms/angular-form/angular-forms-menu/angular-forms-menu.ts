import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-angular-forms-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './angular-forms-menu.html',
  styleUrl: './angular-forms-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularFormsMenu {
  private readonly route = inject(ActivatedRoute);

  protected readonly menuItem = signal(
    this.route.routeConfig?.children?.filter(route => route.data?.['title'])
      .map(route => ({
        title: route.data?.['title'],
        link: route.path,
      })) ?? []
  )
}
