import { User } from './user';
import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = USERS;

  getUsers(page = 1) {
    return this.users.slice();
  }

  getUser(id: number | string) {
    const user = this.users.find(
      u => {
        // console.log(s);
        return u.id === id;
      }
    );
    return user;
  }
}
