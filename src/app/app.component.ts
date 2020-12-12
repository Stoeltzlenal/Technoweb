import { Component, OnInit } from '@angular/core';
//import { PremierService } from './services/premier.service';
// import { resolve } from 'dns';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //appareilOne = 'machine à laver';
  //appareilTwo = 'grille pain';
  //appareilThree = 'frigo';

  //constructor(private premierService: PremierService){ }

  second: number;
  ngOnInit(){
    // le mille de la fonction intervabke de OBservable correspond au temps en milliseconde 1000= 1 seconde le temps vas s'ecouler en secodne
    const counter = Observable.interval(1000);
    //la fonction suscribe permet de souscrire à un OBservable dans notre case celui qui utilise l'intervale
    counter.subscribe(
      (value) => {
        this.second = value;
      },
      (error) => {
        console.log('erreur survenue : ' +error)

      },

      () => {
        console.log('Observable est terminé')
      }
    )
  }

}
