import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Todo {
  id: string;
  title: string;
  done?: boolean;
}

@Component({
  selector: 'app-drag-drop-list',
  imports: [DatePipe, CdkDropList, CdkDrag],
  templateUrl: './drag-drop-list.html',
  styleUrl: './drag-drop-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropList {
  readonly today = new Date();

  protected todos = signal<Todo[]>([
    { id: '1', title: 'Make simple template' },
    { id: '2', title: 'Add some styles' },
    { id: '3', title: 'Add necessary methods and variables' },
    { id: '4', title: 'Make template more complicate' },
    { id: '5', title: 'Sure if everything works fine' },
    { id: '6', title: 'Deploy to Github Pages' },
  ])

  protected drop(event: CdkDragDrop<Todo[]>) {
    this.todos.update(list => {
      const next = [...list];
      moveItemInArray(next, event.previousIndex, event.currentIndex);
      return next;
    })
  }

  protected remainingCount = computed(() => this.todos().filter(item => !item.done).length);

  protected toggle(task: Todo) {
    this.todos.update(list =>
      list.map(item => (item.id === task.id ? { ...item, done: !item.done } : item))
    );
  }
}
