import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-token',
  templateUrl: './modal-token.component.html',
  styleUrls: ['./modal-token.component.scss'],
})
export class ModalTokenComponent {
  token!: string;

  constructor(
    public dialogRef: MatDialogRef<ModalTokenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onAction(index: boolean) {
    if (!index) return this.dialogRef.close();

    this.dialogRef.close(this.token);
  }
}
