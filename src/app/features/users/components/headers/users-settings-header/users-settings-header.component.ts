import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-settings-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    UserDialogComponent,
    MatDialogModule
  ],
  templateUrl: './users-settings-header.component.html',
  styleUrl: './users-settings-header.component.scss',
})
export class UsersSettingsHeaderComponent {
  @Input() searchText: string = '';
  @Output() searchTextChange = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private usersService:UsersService){}

  searchChange() {
    this.searchTextChange.emit(this.searchText);
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width:'500px',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.addUser(result);
      }
    });
  }
}
