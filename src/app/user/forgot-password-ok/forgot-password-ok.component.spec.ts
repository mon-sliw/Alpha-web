import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordOkComponent } from './forgot-password-ok.component';

describe('ForgotPasswordOkComponent', () => {
  let component: ForgotPasswordOkComponent;
  let fixture: ComponentFixture<ForgotPasswordOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
