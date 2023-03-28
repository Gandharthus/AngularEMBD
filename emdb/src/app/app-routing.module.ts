import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './components/ActorsComponents/actors/actors.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/MoviesComponents/movie-details/movie-details.component';
import { MoviesComponent } from './components/MoviesComponents/movies/movies.component';
import { TvShowDetailsComponent } from './components/TvShowsComponents/tv-show-details/tv-show-details.component';
import { TvShowsComponent } from './components/TvShowsComponents/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
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
    path: 'actors',
    component: ActorsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
