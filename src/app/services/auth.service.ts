import { Injectable } from '@angular/core';
import firebase from '@firebase/app';
import '@firebase/auth';
// import Firebase Realtime Database (optional)
import '@firebase/database';
// import Cloud Firestore (optional)
import '@firebase/firestore';

@Injectable()

export class AuthService{

  /*signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          ()=> {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      },

    );
  }

  signOut(){
    this.isAuth = false;
  }*/

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve("succès");
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve("succès");
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }


}
