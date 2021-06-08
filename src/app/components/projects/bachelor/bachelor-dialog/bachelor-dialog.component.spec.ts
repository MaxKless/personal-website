import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorDialogComponent } from './bachelor-dialog.component';

describe('BachelorDialogComponent', () => {
  let component: BachelorDialogComponent;
  let fixture: ComponentFixture<BachelorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachelorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BachelorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
