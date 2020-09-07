import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // title test
  it(`should have a title of 'Bob's Computer Shop'`, async(()=> {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual("Bob's Computer Repair Shop");
  }))
});
