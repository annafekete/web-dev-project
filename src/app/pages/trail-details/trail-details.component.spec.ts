import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailDetailsComponent } from './trail-details.component';

describe('TrailDetailsComponent', () => {
  let component: TrailDetailsComponent;
  let fixture: ComponentFixture<TrailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
