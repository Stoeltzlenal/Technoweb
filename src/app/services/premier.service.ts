export class PremierService {

  appareils = [
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

}
