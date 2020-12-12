import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PremierService } from '/home/isen/Technoweb/Nutrisen/src/app/services/premier.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private premierService:PremierService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    //getAPpareilByid() prend un nombre comme arfgument, il ne faut pas oublier d'utiliser + avant id dans l'appel pour caster la variable comme nombre
    this.name = this.premierService.getAppareilById(+id).name;
    this.status = this.premierService.getAppareilById(+id).status;
  }

}
