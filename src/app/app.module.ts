import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

//Création des routes pour naviguer entre le component de notre application
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  //le path vide correspond à la page racine sinon ça plante
  { path: '', component: AuthComponent},
  //redirige en cas de mauvais index vers une erreur 404
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
  ],
  //array imports de app module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PremierService
    ,AuthService
    ,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
