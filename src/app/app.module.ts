import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {RatingModule} from "ngx-rating";

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homepage/homepage.component';

import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    AdvancedsearchComponent,
    ContactComponent,
	HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
