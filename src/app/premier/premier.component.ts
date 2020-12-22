import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PremierService } from '../services/premier.service';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private premierService: PremierService ) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'effectuer') {
      return 'green';
    }

    if (this.appareilStatus === 'en_cours') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'effectuer'){
      this.premierService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'en_cours'){
      this.premierService.switchOnOne(this.index);
    }
  }

}
