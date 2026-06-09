import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DragResizeSidebar } from "./drag-resize-sidebar/drag-resize-sidebar";

@Component({
  selector: 'app-drag-resize',
  imports: [DragResizeSidebar],
  templateUrl: './drag-resize.html',
  styleUrl: './drag-resize.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragResize {
  content = Array.from({ length: 2 });
}
