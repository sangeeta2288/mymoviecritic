import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { Http, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import {SignupComponent} from '../signup/signup.component';
import {SigninComponent} from '../signin/signin.component';
import {AdvancedsearchComponent} from '../../advancedsearch/advancedsearch.component';
import {MovieComponent} from '../../movie/movie.component';
import {ContactComponent} from '../../contact/contact.component';
import {HomePageComponent} from '../../homepage/homepage.component';
import {RatingModule} from 'ngx-rating';
import { APP_BASE_HREF} from '@angular/common';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ProfileComponent, SignupComponent, SigninComponent, AdvancedsearchComponent , MovieComponent , ContactComponent, HomePageComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [ RouterTestingModule,
        HttpModule,
        AppRoutingModule, FormsModule, MultiselectDropdownModule,
        RatingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
