import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { FormsModule } from '@angular/forms';
import { PremierService } from './services/premier.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


//Création des routes pour naviguer entre le component de notre application
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  //le path vide correspond à la page racine sinon ça plante
  { path: '', component: AuthComponent},
  //redirige en cas de mauvais index vers une erreur 404
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq67S0ONWHAYgq0hNpYIrHZNwkoLSVZx4",
  authDomain: "api-nutri.firebaseapp.com",
  projectId: "api-nutri",
  storageBucket: "api-nutri.appspot.com",
  messagingSenderId: "590375710321",
  appId: "1:590375710321:web:6e32c2e0e8705d1eecb5d0",
  measurementId: "G-WRXKK2949P"
};

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    SignupComponent,
    SigninComponent,
  ],
  //array imports de app module
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [
    PremierService
    ,AuthService
    ,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
