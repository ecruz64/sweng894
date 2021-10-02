import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringComponent } from './watering.component';

describe('WateringComponent', () => {
  let component: WateringComponent;
  let fixture: ComponentFixture<WateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WateringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
