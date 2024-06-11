import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyMainPageComponent } from './add-property-main-page.component';

describe('AddPropertyMainPageComponent', () => {
  let component: AddPropertyMainPageComponent;
  let fixture: ComponentFixture<AddPropertyMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPropertyMainPageComponent]
    });
    fixture = TestBed.createComponent(AddPropertyMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
