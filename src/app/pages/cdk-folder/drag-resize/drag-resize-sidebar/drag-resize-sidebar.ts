import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ScreenWidthSvc } from '../../../../services/screen-width-svc';

@Component({
  selector: 'app-drag-resize-sidebar',
  imports: [DragDropModule],
  templateUrl: './drag-resize-sidebar.html',
  styleUrl: './drag-resize-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragResizeSidebar {
  protected screenSvc = inject(ScreenWidthSvc);

  readonly isMobile = this.screenSvc.isMobile;
  protected defaultSize = 240;
  protected maxSize = 800;
  protected currentSize = signal(this.defaultSize);

  protected pannelStyle = computed(() => ({
    width: this.isMobile() ? null : `${this.currentSize()}px`,
    height: this.isMobile() ? `${this.currentSize()}px` : null,
  }))

  protected onDragMoved(event: CdkDragMove) {
    const position = this.isMobile() ? event.pointerPosition.y : event.pointerPosition.x;

    const min = this.defaultSize;
    const max = this.maxSize;

    const nextSize = Math.min(Math.max(position, min), max);
    this.currentSize.set(nextSize);

    const element = event.source.element.nativeElement;
    element.style.transform = 'none';
  }

  protected reset() {
    this.currentSize.set(this.defaultSize);
  }
}
