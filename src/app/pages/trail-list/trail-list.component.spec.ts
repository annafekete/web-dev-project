import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailListComponent } from './trail-list.component';

describe('TrailListComponent', () => {
  let component: TrailListComponent;
  let fixture: ComponentFixture<TrailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
