import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BachelorDialogComponent } from './bachelor-dialog/bachelor-dialog.component';

@Component({
  selector: 'app-bachelor',
  templateUrl: './bachelor.component.html',
  styleUrls: ['./bachelor.component.scss'],
})
export class BachelorComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(BachelorDialogComponent);
  }
}
