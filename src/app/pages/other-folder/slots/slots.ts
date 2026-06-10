import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SlotsCard } from "./slots-card/slots-card";
import { SlotsButtons } from './slots-buttons/slots-buttons';

interface Item {
  id: number;
  text: string;
}

@Component({
  selector: 'app-slots',
  imports: [SlotsCard, SlotsButtons],
  templateUrl: './slots.html',
  styleUrl: './slots.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slots {
  editing = signal(false);
  loading = signal(false);
  draft = signal('');
  items = signal<Item[]>([]);
  showHeader = signal(true);
  showFooter = signal(true);

  toggleEdit() {
    this.editing.update(v => !v);
  }

  toggleHeader() {
    this.showHeader.update(v => !v);
  }

  toggleFooter() {
    this.showFooter.update(v => !v);
  }

  updateDraft(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.draft.set(value);
  }

  submit() {
    const value = this.draft().trim();

    if (!value || this.loading()) return;

    this.loading.set(true);
    setTimeout(() => {
      this.items.update(items => [
        ...items,
        {
          id: Date.now(),
          text: value
        }
      ]);

      this.draft.set('');
      this.editing.set(false);
      this.loading.set(false);
    }, 3000)
  }

  remove(id: number) {
    this.items.update(items => items.filter(item => item.id !== id))
  }
}
