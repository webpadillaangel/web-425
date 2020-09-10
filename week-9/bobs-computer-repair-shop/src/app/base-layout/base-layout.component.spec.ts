import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseLayoutComponent } from './base-layout.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MatSnackBarModule
      ],
      declarations: [
        BaseLayoutComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BaseLayoutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
