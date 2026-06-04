import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {
  readonly user = input.required<User>();
}
