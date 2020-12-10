import { Component, OnInit } from '@angular/core';
import { PremierService } from './services/premier.service';
// import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //appareilOne = 'machine à laver';
  //appareilTwo = 'grille pain';
  //appareilThree = 'frigo';

  constructor(private premierService: PremierService){ }

  ngOnInit(){
    this.appareils = this.premierService.appareils;
  }

}
