import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { UserSvc } from '../../../../services/user-svc';
import { Listbox, Option } from '@angular/aria/listbox';
import { User } from '../../../../models/user.interface';
import { UserCard } from "../../../../components/user-card/user-card";

export type AriaSelectionMode = 'follow' | 'explicit';

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
  selectionMode = signal<AriaSelectionMode>('explicit');
  listbox = viewChild<Listbox<User>>(Listbox);

  readonly selectedUser = computed(() => {
    return this.listbox()?.values() ?? [];
  });

  toggleMultiSelection() {
    this.isMulti.update(val => !val);
    if (this.isMulti()) this.selectionMode.set('explicit');
    this.listbox()?.values.set([]);
  }

  toggleSelectionMode() {
    this.selectionMode.update(mode => mode === 'explicit' ? 'follow' : 'explicit');
  }
}
