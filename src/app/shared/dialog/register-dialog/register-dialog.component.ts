import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>
  ) {}

  onCloseClick() {
    this.dialogRef.close();
  }

  onRegisterClick() {
    this.dialogRef.close({
      navigate: ['/attendee/registration']
    });
  }
}
