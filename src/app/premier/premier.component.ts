import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

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

}
