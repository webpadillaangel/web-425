import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerServicesFormComponent } from './computer-services-form.component';

describe('ComputerServicesFormComponent', () => {
  let component: ComputerServicesFormComponent;
  let fixture: ComponentFixture<ComputerServicesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerServicesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
