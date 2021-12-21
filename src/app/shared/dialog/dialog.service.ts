import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DefaultDialogComponent } from './default-dialog/default-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { ThanksDialogComponent } from './thanks-dialog/thanks-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) {}

  openRegisterDialog() {
    const ref = this.dialog.open(RegisterDialogComponent, {
      panelClass: 'register-dialog-container'
    });
    return ref;
  }

  openDialog(options?: MatDialogConfig) {
    const ref = this.dialog.open(DefaultDialogComponent, options);
    return ref;
  }

  openOrderDialog() {
    const ref = this.dialog.open(OrderDialogComponent, {
      panelClass: 'order-dialog-container'
    });
    return ref;
  }
  
  openThankDialog() {
    const ref = this.dialog.open(ThanksDialogComponent, {
      panelClass: 'thanks-dialog-container'
    });
    return ref;
  }
}
