import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms'; // import the FormsModule
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AngularFireAuthGuardComponent } from './angular-fire-auth-guard/angular-fire-auth-guard.component';
import { ForgotPassComponent } from './components/Authentification/forgot-pass/forgot-pass.component';
import { VerifyMailComponent } from './components/Authentification/verify-mail/verify-mail.component';


//import { AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AngularFireAuthGuardComponent,
    ForgotPassComponent,
    VerifyMailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
