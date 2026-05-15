import { Injectable, signal } from '@angular/core';

export interface DummyData {
  title: string;
  image: string;
  text: string;
}

@Injectable()
export class DummyDataSvc {
  private _data = signal<DummyData | null>(null);
  dummyData = this._data.asReadonly();

  private timeoutValue = 3000;
  private loading = false;

  loadData() {
    if (this.loading || this._data()) return;

    this.loading = true;

    setTimeout(() => {
      this._data.set({
        title: 'Title',
        image: 'images/plant.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam.'
      })
      this.loading = false;
    }, this.timeoutValue);
  }
}
