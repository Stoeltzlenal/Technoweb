import { Component, OnDestroy, OnInit } from '@angular/core';
//import { PremierService } from './services/premier.service';
// import { resolve } from 'dns';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  isAuth: boolean;
  //appareilOne = 'machine à laver';
  //appareilTwo = 'grille pain';
  //appareilThree = 'frigo';

  //constructor(private premierService: PremierService){ }

  second: number;
  counterSubscription: Subscription;

  constructor(private authService: AuthService, private db: AngularFirestore) { 
    const things = db.collection('things').valueChanges();
      things.subscribe(console.log);
  }
  ngOnInit(){
    // le mille de la fonction intervabke de OBservable correspond au temps en milliseconde 1000= 1 seconde le temps vas s'ecouler en secodne
    const counter = Observable.interval(1000);

    //la fonction suscribe permet de souscrire à un OBservable dans notre case celui qui utilise l'intervale
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.second = value;
      },
      (error) => {
        console.log('erreur survenue : ' +error);

      },

      () => {
        console.log('Observable est terminé');
      }
    );

    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
