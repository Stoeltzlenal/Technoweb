import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PremierService {

  appareilsSubject =  new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'model de tâche',
      status: 'en_cours'

    },


  ];

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.status = 'effectuer';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.status= 'en_cours';
    }
  }

  switchOnOne(i: number ) {
    this.appareils[i].status='effectuer';

  }

  switchOffOne(i: number) {
    this.appareils[i].status='en_cours';

  }

  getAppareilById(id : number){
    const appareil=this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };

    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://api-nutri-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://api-nutri-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteAppareilsToServer() {
    this.httpClient
      .delete<any[]>('https://api-nutri-default-rtdb.europe-west1.firebasedatabase.app/appareils.json' )
      .subscribe(
        () => {
          console.log('Suppression terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
