import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to home page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[0].attributes[2];
    expect(element.value).toEqual('/home');
  }));

  it('should navigate to movie page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[1].attributes[2];
    expect(element.value).toEqual('/movie');
  }));

  it('should navigate to advanced search page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[2].attributes[2];
    expect(element.value).toEqual('/advancedsearch');
  }));

  it('should navigate to profile page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[3].attributes[2];
    expect(element.value).toEqual('/profile');
  }));

  it('should navigate to sign page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[5].attributes[2];
    expect(element.value).toEqual('/signin');
  }));

  it('should navigate to register page', async(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('a');
    const element = result[6].attributes[2];
    expect(element.value).toEqual('/signup');
  }));
});
