import { Component, Input, OnInit } from '@angular/core';
import { PremierService } from '../services/premier.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareilSubscription: Subscription;

  @Input() id: number;
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
  }

  ngOnInit(): void {
    this.appareilSubscription = this.premierService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.premierService.emitAppareilSubject();

  }

  onAllumer() {
    this.premierService.switchOnAll();
    console.log('Met tout en cours!');
  }

  onEteindre(){
    if(confirm('souhaitez vous mettre toute vos tâches en cours?'))
    {
      this.premierService.switchOffAll();
      console.log('eteind tous');

    }
    else {
      return null;
    }
  }

  onSave() {
    this.premierService.saveAppareilsToServer();
  }

  onFetch() {
    this.premierService.getAppareilsFromServer();
  }

  onDelete() {
    if(confirm('Souhaitez vous supprimer toute vos tâches ?'))
    {
      this.premierService.deleteAppareilsToServer();

      console.log('supprime tous');
      window.location.reload();

    }
    else {
      return null;
    }
  }


}
