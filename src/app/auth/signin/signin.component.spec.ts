import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [  RouterTestingModule, HttpModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create input', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  }));
});
