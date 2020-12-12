import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '/home/isen/Technoweb/Nutrisen/src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus= this.authService.isAuth;
  }
  //lors de la connexion permet de se connecter
  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("log in succesful")
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );

  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus= this.authService.isAuth;
  }

}
