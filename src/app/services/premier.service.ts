import { Subject } from 'rxjs/Subject';

export class PremierService {

  appareilsSubject =  new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'frigo',
      status: 'eteint'

    },
    {
      id: 2,
      name: 'four',
      status: 'allumer'
    },
    {
      id: 3,
      name: 'razoir',
      status: 'eteint'

    }

  ]

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.status = 'allumer';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.status= 'eteint';
    }
  }

  switchOnOne(i: number ) {
    this.appareils[i].status='allumer';

  }

  switchOffOne(i: number) {
    this.appareils[i].status='eteint';

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
}