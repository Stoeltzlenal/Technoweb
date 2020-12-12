import { Component, Input, OnInit } from '@angular/core';
import { PremierService } from '../services/premier.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() id: number;
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils: any[];


  constructor(private premierService:PremierService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }

  ngOnInit(): void {
    this.appareils = this.premierService.appareils;
  }

  onAllumer() {
    this.premierService.switchOnAll();
    console.log('on allume tout !');
  }

  onEteindre(){
    if(confirm('souhaitez vous tout éteindre ?'))
    {
      this.premierService.switchOffAll();
      console.log('eteind tous');

    }
    else {
      return null;
    }
  }

}
