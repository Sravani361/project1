import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopicsComponent } from './biopics.component';

describe('BiopicsComponent', () => {
  let component: BiopicsComponent;
  let fixture: ComponentFixture<BiopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
