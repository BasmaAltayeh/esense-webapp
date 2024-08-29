import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../models/user.model';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
      CommonModule,
      MatDialogModule,
      MatIconModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input() filterText: string = '';
  users: User[] = [];
  // add prop for pageNumber

  constructor(private userService: UsersService, private dialog: MatDialog) {
    this.userService.users$.subscribe((users) => {
      this.users = users;
    });
  }

  // make getUsers method that has two states, one refresh true and one refresh false
  // if the refresh false it's for loadMore to add data to the users array

  // add handling load more method for infinit scroll - add 1 for the page and call getUsers method with refresh false

  openEditUserDialog(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width:'500px',
      data: { mode: 'edit', user: { ...user } },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.updateUser(result);
      }
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  get filteredUsers(): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
