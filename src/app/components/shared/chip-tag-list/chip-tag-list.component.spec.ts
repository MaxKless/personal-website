import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTagListComponent } from './chip-tag-list.component';

describe('ChipTagListComponent', () => {
  let component: ChipTagListComponent;
  let fixture: ComponentFixture<ChipTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
