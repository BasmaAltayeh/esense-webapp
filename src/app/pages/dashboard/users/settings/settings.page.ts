import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../../features/users/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../../features/users/models/user.model';
import { UsersListComponent } from '../../../../features/users/components/lists/users-list/users-list.component';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UsersSettingsHeaderComponent } from '../../../../features/users/components/headers/users-settings-header/users-settings-header.component';

@Component({
  selector: 'app-settings.page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UsersListComponent,
    MatInput,
    MatIconModule,
    UsersSettingsHeaderComponent
  ],
  templateUrl: './settings.page.html',
})
export class SettingsPageComponent {
  users$: Observable<User[]> = this.userService.users$;
  searchText: string = '';

  constructor(private userService: UsersService) {}

  onSearchChange(searchText: string) {
    this.searchText = searchText;
  }
}
