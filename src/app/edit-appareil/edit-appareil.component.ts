import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { PremierService } from '../services/premier.service';


@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'eteint';

  constructor(private premierService: PremierService, private router: Router) { }

  ngOnInit(): void {
  }

  //permet d'envoyer les inputs du formulaire à premierservice
  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const status = form.value['status'];
    this.premierService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }

}
