import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, inject, signal, viewChild, viewChildren } from '@angular/core';
import { UserSvc } from '../../../services/user-svc';
import { UserCard } from "../../../components/user-card/user-card";
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { OverlayModule } from '@angular/cdk/overlay';
import { User } from '../../../models/user.interface';

interface UserSearchResult {
  user: User;
  matches: string[];
}

@Component({
  selector: 'app-aria-combobox',
  imports: [UserCard,
    Combobox,
    ComboboxInput,
    ComboboxPopupContainer,
    Listbox,
    Option,
    OverlayModule,
  ],
  templateUrl: './aria-combobox.html',
  styleUrl: './aria-combobox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AriaCombobox {
  private userSvc = inject(UserSvc);

  listbox = viewChild<Listbox<string>>(Listbox);
  options = viewChildren<Option<string>>(Option);
  combobox = viewChild<Combobox<string>>(Combobox);
  input = viewChild<ComboboxInput>(ComboboxInput);

  readonly search = signal('');
  users = this.userSvc.users;

  // readonly filteredUsers = computed(() => {
  //   const query = this.search().trim().toLowerCase();
  //   if (!query) return this.users();

  //   return this.users()?.filter(user =>
  //     user.firstName.toLowerCase().includes(query) ||
  //     user.lastName.toLowerCase().includes(query) ||
  //     user.profession.toLowerCase().includes(query) ||
  //     user.address.city.toLowerCase().includes(query) ||
  //     user.address.state.toLowerCase().includes(query) ||
  //     user.skills.some(skill => skill.toLowerCase().includes(query))
  //   )
  // })
  readonly filteredUsers = computed<UserSearchResult[]>(() => {
    const query = this.search().trim().toLowerCase();

    const users = this.users() ?? [];

    if (!query) {
      return users.map(user => ({
        user,
        matches: []
      }));
    }

    return users
      .map(user => {

        const matches: string[] = [];

        if (user.firstName.toLowerCase().includes(query)) {
          matches.push(`First name: ${user.firstName}`);
        }

        if (user.lastName.toLowerCase().includes(query)) {
          matches.push(`Last name: ${user.lastName}`);
        }

        if (user.profession.toLowerCase().includes(query)) {
          matches.push(`Profession: ${user.profession}`);
        }

        if (user.address.city.toLowerCase().includes(query)) {
          matches.push(`City: ${user.address.city}`);
        }

        if (user.address.state.toLowerCase().includes(query)) {
          matches.push(`State: ${user.address.state}`);
        }

        user.skills.forEach(skill => {
          if (skill.toLowerCase().includes(query)) {
            matches.push(`Skill: ${skill}`);
          }
        });

        return {
          user,
          matches
        };
      })
      .filter(result => result.matches.length > 0);
  });

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

  clearSearch() {
    this.search.set('');
    queueMicrotask(() => this.input()?.element.focus());
  }
}
