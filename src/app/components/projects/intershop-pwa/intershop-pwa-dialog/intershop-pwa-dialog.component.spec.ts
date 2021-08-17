import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershopPwaDialogComponent } from './intershop-pwa-dialog.component';

describe('IntershopPwaDialogComponent', () => {
  let component: IntershopPwaDialogComponent;
  let fixture: ComponentFixture<IntershopPwaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntershopPwaDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershopPwaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
