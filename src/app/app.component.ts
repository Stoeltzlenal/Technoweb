import { Component } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nutrisen';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareilOne = 'machine à laver';
  appareilTwo = 'grille pain';
  appareilThree = 'frigo';

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
  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('on allume tout !');
  }

}
