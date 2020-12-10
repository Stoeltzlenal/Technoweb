export class PremierService {

  appareils = [
    {
      name: 'frigo',
      status: 'eteint'

    },
    {
      name: 'four',
      status: 'allumer'
    },
    {
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

}
