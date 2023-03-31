import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './auth.service';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AngularFireAuthGuardComponent } from './angular-fire-auth-guard/angular-fire-auth-guard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/MoviesComponents/movies/movies.component';
import { TvShowsComponent } from './components/TvShowsComponents/tv-shows/tv-shows.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/MoviesComponents/movie-details/movie-details.component';
import { PopularMoviesComponent } from './components/MoviesComponents/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/MoviesComponents/top-rated-movies/top-rated-movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendingdMoviesComponent } from './components/MoviesComponents/trending-movies/trending-movies.component';
import { PopularTvShowsComponent } from './components/TvShowsComponents/popular-tv-shows/popular-tv-shows.component';
import { TopRatedTvShowsComponent } from './components/TvShowsComponents/top-rated-tv-shows/top-rated-tv-shows.component';
import { TrendingTvShowsComponent } from './components/TvShowsComponents/trending-tv-shows/trending-tv-shows.component';
import { TvShowDetailsComponent } from './components/TvShowsComponents/tv-show-details/tv-show-details.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { ActorsComponent } from './components/ActorsComponents/actors/actors.component';
import { PopularActorsComponent } from './components/ActorsComponents/popular-actors/popular-actors.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    AngularFireAuthGuardComponent,
    HomeComponent,
    MovieDetailsComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    NavbarComponent,
    TrendingdMoviesComponent,
    PopularTvShowsComponent,
    TopRatedTvShowsComponent,
    TrendingTvShowsComponent,
    TvShowDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ActorsComponent,
    PopularActorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),BrowserAnimationsModule,
    FormsModule],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    AngularFireAuthGuard,],
  bootstrap: [AppComponent],
})
export class AppModule {}
