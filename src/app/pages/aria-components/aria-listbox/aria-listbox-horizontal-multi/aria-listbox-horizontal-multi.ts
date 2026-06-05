import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { UserSvc } from '../../../../services/user-svc';
import { Listbox, Option } from '@angular/aria/listbox';
import { User } from '../../../../models/user.interface';
import { UserCard } from "../../../../components/user-card/user-card";

@Component({
  selector: 'app-aria-listbox-horizontal-multi',
  imports: [Listbox, Option, UserCard],
  templateUrl: './aria-listbox-horizontal-multi.html',
  styleUrl: './aria-listbox-horizontal-multi.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaListboxHorizontalMulti {
  readonly userSvc = inject(UserSvc);
  readonly users = this.userSvc.users;

  isMulti = signal(true);
  listbox = viewChild<Listbox<User>>(Listbox);

  readonly selectedUser = computed(() => {
    return this.listbox()?.values() ?? [];
  });

  toggleSelectionMode() {
    this.isMulti.update(val => !val);
    this.listbox()?.values.set([]);
  }
}
