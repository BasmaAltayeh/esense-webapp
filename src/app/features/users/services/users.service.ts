import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  private userIdCounter = 1;
  
  // for pagination , add page and pagesize for getting users method for big data

  addUser(user: Omit<User, 'id'>) {
    const newUser: User = { id: this.userIdCounter++, ...user };
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, newUser]);
  }

  updateUser(updatedUser: User) {
    const currentUsers = this.usersSubject.value.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(currentUsers);
  }

  deleteUser(userId: number) {
    const currentUsers = this.usersSubject.value.filter(
      (user) => user.id !== userId
    );
    this.usersSubject.next(currentUsers);
  }
}
