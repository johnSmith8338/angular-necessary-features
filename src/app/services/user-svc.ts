import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserSvc {
  private http = inject(HttpClient);

  readonly userResource = httpResource<User[]>(() => 'jsons/users.json');

  readonly users = this.userResource.value;
  readonly loading = this.userResource.isLoading;
  readonly error = this.userResource.error;
}
