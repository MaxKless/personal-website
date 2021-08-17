import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenderSystemComponent } from './recommender-system.component';

describe('RecommenderSystemComponent', () => {
  let component: RecommenderSystemComponent;
  let fixture: ComponentFixture<RecommenderSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommenderSystemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommenderSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
