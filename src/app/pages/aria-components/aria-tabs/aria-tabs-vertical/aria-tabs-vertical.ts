import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { UserSvc } from '../../../../services/user-svc';
import { AriaSelectionMode } from '../../aria-listbox/aria-listbox-horizontal-multi/aria-listbox-horizontal-multi';
import { UserCard } from "../../../../components/user-card/user-card";
import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';

@Component({
  selector: 'app-aria-tabs-vertical',
  imports: [
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabContent,
    UserCard
  ],
  templateUrl: './aria-tabs-vertical.html',
  styleUrl: './aria-tabs-vertical.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaTabsVertical {
  private readonly userSvc = inject(UserSvc);
  users = this.userSvc.users;

  selectionMode = signal<AriaSelectionMode>('follow');
  selectedTab = signal<string | undefined>('1');

  toggleSelectionMode() {
    this.selectionMode.update(mode => mode === 'explicit' ? 'follow' : 'explicit');
  }

  readonly userMap = computed(() => new Map((this.users() ?? []).map(user => [
    user.id.toString(), user
  ])))

  readonly selectedUser = computed(() => this.userMap().get(
    this.selectedTab() ?? ''
  ) ?? null);
}
