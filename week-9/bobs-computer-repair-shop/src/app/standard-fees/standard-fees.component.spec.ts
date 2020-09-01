import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardFeesComponent } from './standard-fees.component';

describe('StandardFeesComponent', () => {
  let component: StandardFeesComponent;
  let fixture: ComponentFixture<StandardFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
