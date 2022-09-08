import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRegistrationComponent } from './b-registration.component';

describe('BRegistrationComponent', () => {
  let component: BRegistrationComponent;
  let fixture: ComponentFixture<BRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
