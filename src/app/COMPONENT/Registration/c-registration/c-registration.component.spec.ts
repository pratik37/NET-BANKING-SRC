import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegistrationComponent } from './c-registration.component';

describe('CRegistrationComponent', () => {
  let component: CRegistrationComponent;
  let fixture: ComponentFixture<CRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
