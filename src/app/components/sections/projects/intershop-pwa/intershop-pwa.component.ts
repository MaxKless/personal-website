import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IntershopPwaDialogComponent } from './intershop-pwa-dialog/intershop-pwa-dialog.component';

@Component({
  selector: 'app-intershop-pwa',
  templateUrl: './intershop-pwa.component.html',
  styleUrls: ['./intershop-pwa.component.scss'],
})
export class IntershopPwaComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(IntershopPwaDialogComponent);
  }
}
