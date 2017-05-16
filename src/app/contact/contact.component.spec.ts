import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {by} from 'protractor';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1  tag', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contact Us');
  }));

  it('should render Label Address in a h3 tag', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Address');
  }));

  it('should render Full Address in a p tag', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('The City College of New York');
  }));

  it('should render Label Email Address in a h3 tag', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('h3');
    expect(result[1].textContent).toContain('E-Mail Address');
  }));

  it('should render Email Address in a p tag', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const result = compiled.querySelectorAll('p');
    expect(result[1].textContent).toContain('sada_info@gmail.com');
  }));
  it('should render map in iframe', async(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('iframe')).toBeTruthy();
  }));
});
