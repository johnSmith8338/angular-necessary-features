import { ChangeDetectionStrategy, Component, computed, inject, viewChild } from '@angular/core';
import { UserSvc } from '../../../services/user-svc';
import { Listbox, Option } from "@angular/aria/listbox";
import { UserCard } from "../../../components/user-card/user-card";
import { User } from '../../../models/user.interface';
import { AriaListboxHorizontalMulti } from "./aria-listbox-horizontal-multi/aria-listbox-horizontal-multi";

@Component({
  selector: 'app-aria-listbox',
  imports: [Listbox, Option, UserCard, AriaListboxHorizontalMulti],
  templateUrl: './aria-listbox.html',
  styleUrl: './aria-listbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaListbox {
  readonly userSvc = inject(UserSvc);
  readonly users = this.userSvc.users;

  listbox = viewChild<Listbox<User>>(Listbox);

  readonly selectedUser = computed(() => {
    const values = this.listbox()?.values();
    return values?.[0] ?? null;
  });
}
