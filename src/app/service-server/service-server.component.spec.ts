import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceServerComponent } from './service-server.component';

describe('ServiceServerComponent', () => {
  let component: ServiceServerComponent;
  let fixture: ComponentFixture<ServiceServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
