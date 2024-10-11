import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingreleasesComponent } from './upcomingreleases.component';

describe('UpcomingreleasesComponent', () => {
  let component: UpcomingreleasesComponent;
  let fixture: ComponentFixture<UpcomingreleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingreleasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingreleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
