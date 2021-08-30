import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFabComponent } from './scroll-fab.component';

describe('ScrollFabComponent', () => {
  let component: ScrollFabComponent;
  let fixture: ComponentFixture<ScrollFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
