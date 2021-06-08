import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BachelorDialogComponent } from './bachelor-dialog/bachelor-dialog.component';

@Component({
  selector: 'app-bachelor',
  templateUrl: './bachelor.component.html',
  styleUrls: ['./bachelor.component.scss'],
})
export class BachelorComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.matDialog.open(BachelorDialogComponent);
  }
}
