import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeViewer } from '../../../components/code-viewer/code-viewer';

@Component({
  selector: 'app-date-pipe-example',
  imports: [DatePipe, CodeViewer],
  templateUrl: './date-pipe-example.html',
  styleUrl: './date-pipe-example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePipeExample {
  protected date = new Date('2026-06-12 14:40:26');

  default = `{{date | date}}`;
  short = `{{date | date:'short'}}`;
  medium = `{{date | date:'medium'}}`;
  long = `{{date | date:'long'}}`;
  fullDate = `{{date | date:'fullDate'}}`;
  shortTime = `{{date | date:'shortTime'}}`;
  customYear = `
    yyyy (4 digits), yy (2 digits)
  `
  customMonths = `
    MMMM (full), MMM (abbreviation), MM (2 digits), M (1 digit)
  `
  customDay = `
    dd (2 digits with 0), d (1 digit)
  `
  customHour = `
    HH (24-hour), hh (12-hour)
  `
  customMinute = `
    mm
  `
  customSecond = `
    ss
  `
  example = `{{date | date:'dd MMM yyyy hh:mm'}}`;
}
