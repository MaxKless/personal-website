import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershopPwaComponent } from './intershop-pwa.component';

describe('IntershopPwaComponent', () => {
  let component: IntershopPwaComponent;
  let fixture: ComponentFixture<IntershopPwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntershopPwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershopPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
