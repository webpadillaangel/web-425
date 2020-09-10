import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from './../auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  class MockAuthService extends AuthService {
    // mock auth services
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [SignInComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    component.signInForm = formBuilder.group({
      employeeId: null,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1st test - When sign in is empty and onSignin is called, the result should be false
  it('should return falsy when employee id is empty', () => {
    const result = component.onSignIn();
    expect(result).toBeFalsy();
  });

});
