import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareBoneRegistrationComponent } from './bare-bone-registration.component';

describe('BareBoneRegistrationComponent', () => {
  let component: BareBoneRegistrationComponent;
  let fixture: ComponentFixture<BareBoneRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BareBoneRegistrationComponent]
    });
    fixture = TestBed.createComponent(BareBoneRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
