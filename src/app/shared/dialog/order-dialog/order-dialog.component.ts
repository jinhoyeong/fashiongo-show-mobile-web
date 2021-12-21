import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onOrderTypeClick(type: 'asc' | 'desc' | null) {
    this.dialogRef.close(type);
  }
}
