import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorDetailsComponent } from './components/ActorsComponents/actor-details/actor-details.component';
import { ActorsComponent } from './components/ActorsComponents/actors/actors.component';

import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { HomeComponent } from './components/Authentification/home/home.component';
import {ForgotPassComponent} from './components/Authentification/forgot-pass/forgot-pass.component';
import {VerifyMailComponent} from './components/Authentification/verify-mail/verify-mail.component';
const routes: Routes = [



  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'tvShows',
    component: TvShowsComponent,
  },
  {
    path: 'tvshow/:id',
    component: TvShowDetailsComponent,
  },
  {
    path: 'actor',
    component: ActorsComponent,
  },


{
  path: '',
  component : HomeComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'forgot',
  component: ForgotPassComponent,
},
{
  path: 'verify',
  component: VerifyMailComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
