import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
    
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent {
  userForm: FormGroup;
  mode: 'add' | 'edit';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit'; user?: User }
  ) {
    this.mode = data.mode;
    this.userForm = this.fb.group({
      name: [data.user?.name || '', Validators.required],
      description: [data.user?.description || '', Validators.required],
    });
  }

  save() {
    if (this.userForm.valid) {
      const updatedUser = { ...this.data.user, ...this.userForm.value };
      this.dialogRef.close(updatedUser);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
