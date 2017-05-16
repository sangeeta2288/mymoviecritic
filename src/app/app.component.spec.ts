import { TestBed, async } from '@angular/core/testing';

import { Router, RouterOutlet} from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { APP_BASE_HREF} from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AdvancedsearchComponent} from './advancedsearch/advancedsearch.component';
import {MovieComponent} from './movie/movie.component';
import {HomePageComponent} from './homepage/homepage.component';
import {ProfileComponent} from './auth/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {RatingModule} from 'ngx-rating';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        AdvancedsearchComponent,
        MovieComponent,
        HomePageComponent,
        ProfileComponent,
      ],
      providers: [
        RouterOutlet,
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [ RouterTestingModule,
      HttpModule,
      AppRoutingModule, FormsModule, MultiselectDropdownModule,
      RatingModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should create app header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  }));

  it('should create router-outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
});
