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

//Création des routes pour naviguer entre le component de notre application
const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  //le path vide correspond à la page racine sinon ça plante
  { path: '', component:AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    AuthComponent,
    AppareilViewComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
