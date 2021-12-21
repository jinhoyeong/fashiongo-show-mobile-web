import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-default-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.scss']
})
export class DefaultDialogComponent {

  title: string;
  content: string;

  constructor(
    public dialogRef: MatDialogRef<DefaultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      content: string
    }
  ) {
    this.title = data.title;
    this.content = data.content;
  }

  onCancelClick() {

  }
  onOkClick() {

  }
}
