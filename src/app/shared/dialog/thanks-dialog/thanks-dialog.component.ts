import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks-dialog',
  templateUrl: './thanks-dialog.component.html',
  styleUrls: ['./thanks-dialog.component.scss']
})
export class ThanksDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ThanksDialogComponent>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onHomeClick() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
  onFashionGoClick() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
