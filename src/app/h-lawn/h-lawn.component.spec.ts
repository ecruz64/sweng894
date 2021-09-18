import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HLawnComponent } from './h-lawn.component';

describe('HLawnComponent', () => {
  let component: HLawnComponent;
  let fixture: ComponentFixture<HLawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HLawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
