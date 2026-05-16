import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stop-repeat-content',
  imports: [NgTemplateOutlet],
  templateUrl: './stop-repeat-content.html',
  styleUrl: './stop-repeat-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopRepeatContent {
  signUp() {
    alert('Signed up!');
  }

  showNow() {
    alert('Show now!');
  }

  signIn() {
    alert('Signed in!');
  }
}
