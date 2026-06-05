import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { OverlayModule } from '@angular/cdk/overlay';
import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, effect, inject, viewChild, viewChildren } from '@angular/core';
import { UserSvc } from '../../../services/user-svc';
import { User } from '../../../models/user.interface';
import { UserCard } from "../../../components/user-card/user-card";

@Component({
  selector: 'app-aria-multiselect',
  imports: [
    Combobox,
    ComboboxInput,
    ComboboxPopupContainer,
    OverlayModule,
    Listbox,
    Option,
    UserCard
  ],
  templateUrl: './aria-multiselect.html',
  styleUrl: './aria-multiselect.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaMultiselect {
  readonly userSvc = inject(UserSvc);
  readonly users = this.userSvc.users;

  listbox = viewChild<Listbox<number>>(Listbox);
  options = viewChildren<Option<number>>(Option);
  combobox = viewChild<Combobox<number>>(Combobox);

  readonly selectedIds = computed(() => this.listbox()?.values() ?? []);

  readonly userMap = computed(() => new Map(
    (this.users() ?? []).map(user => [user.id, user])
  ))

  readonly selectedUsers = computed(() => {
    const map = this.userMap();
    return this.selectedIds().map(id => map.get(id)).filter(Boolean) as User[];
  });

  displayValue = computed(() => {
    const users = this.selectedUsers();

    if (!users.length) return 'Select user...';
    if (users.length === 1) return users[0].firstName;
    return `${users[0].firstName} + ${users.length - 1} more`;
  })

  constructor() {
    afterRenderEffect(() => {
      const option = this.options().find((opt) => opt.active());
      setTimeout(() => option?.element.scrollIntoView({ block: 'nearest' }), 50);
    })

    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    })
  }

  removeUser(id: number) {
    const current = this.selectedIds();
    this.listbox()?.values.set(current.filter(v => v !== id))
  }

  clearSelection() {
    this.listbox()?.values.set([]);
  }
}
