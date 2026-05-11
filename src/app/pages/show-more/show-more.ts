import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShowMoreToggle } from './show-more-toggle/show-more-toggle';

@Component({
  selector: 'app-show-more',
  imports: [ShowMoreToggle],
  templateUrl: './show-more.html',
  styleUrl: './show-more.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowMore { }
