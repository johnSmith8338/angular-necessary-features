import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClickOutsideMenu } from "./click-outside-menu/click-outside-menu";

@Component({
  selector: 'app-click-outside-test',
  imports: [ClickOutsideMenu],
  templateUrl: './click-outside-test.html',
  styleUrl: './click-outside-test.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickOutsideTest {
  content = Array.from({ length: 2 });
}
