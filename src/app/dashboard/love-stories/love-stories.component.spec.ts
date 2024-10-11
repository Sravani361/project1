import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveStoriesComponent } from './love-stories.component';

describe('LoveStoriesComponent', () => {
  let component: LoveStoriesComponent;
  let fixture: ComponentFixture<LoveStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
