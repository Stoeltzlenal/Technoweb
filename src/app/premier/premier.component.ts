import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PremierService } from '/home/isen/Technoweb/Nutrisen/src/app/services/premier.service';

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
    if (this.appareilStatus === 'allumer') {
      return 'green';
    }

    if (this.appareilStatus === 'eteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumer'){
      this.premierService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'eteint'){
      this.premierService.switchOnOne(this.index);
    }
  }

}
