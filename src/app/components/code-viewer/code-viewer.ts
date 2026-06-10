import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-code-viewer',
  imports: [],
  templateUrl: './code-viewer.html',
  styleUrl: './code-viewer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeViewer {
  readonly code = input.required<string>();
}
