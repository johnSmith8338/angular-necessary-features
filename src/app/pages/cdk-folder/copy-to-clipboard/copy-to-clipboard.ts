import { ClipboardModule } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-copy-to-clipboard',
  imports: [FormsModule, ClipboardModule],
  templateUrl: './copy-to-clipboard.html',
  styleUrl: './copy-to-clipboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyToClipboard {
  protected readonly minWordds = 10;
  protected readonly maxWordds = 20;

  protected readonly generatedText = signal('');
  protected readonly customText = signal('');

  protected readonly items = signal<string[]>([]);
  protected copied = signal(false);

  private copiedTimeout?: ReturnType<typeof setTimeout>;
  private readonly dictionary = ['angular', 'signal', 'component', 'template', 'observable', 'frontend', 'typescript', 'developer', 'interface', 'service', 'directive', 'performance', 'button', 'modal', 'layout', 'responsive', 'application', 'modern', 'architecture', 'design', 'keyboard', 'animation', 'validation', 'container', 'element', 'browser', 'optimization', 'configuration', 'dynamic', 'production',]

  protected generateText() {
    const wordsCount = this.random(this.minWordds, this.maxWordds);
    const text = Array.from({ length: wordsCount }, () => this.randomWord()).join(' ');
    this.generatedText.set(this.capitalize(text) + '.');
  }

  protected addGeneratedText() {
    const value = this.generatedText().trim();
    if (!value) return;
    this.items.update(list => [value, ...list]);
  }

  protected addCustomText() {
    const value = this.customText().trim();
    if (!value) return;
    this.items.update(list => [value, ...list]);
    this.customText.set('');
  }

  private randomWord(): string {
    const index = this.random(0, this.dictionary.length - 1);
    return this.dictionary[index];
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  onCopied() {
    this.copied.set(true);
    clearTimeout(this.copiedTimeout);
    this.copiedTimeout = setTimeout(() => {
      this.copied.set(false);
    }, 3000);
  }
}
