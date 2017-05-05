import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { MovieComponent } from './movie/movie.component';
import { HomePageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './auth/profile/profile.component';
;

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'advancedsearch', component: AdvancedsearchComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'home', component: HomePageComponent },
  { path: '',
    redirectTo: '/movie',
    pathMatch: 'full'
  }
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

