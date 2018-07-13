import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: any;

  constructor(private router: Router) {}
ngOnIt(){

}
  signupUser(email: string, password: string) {
  
    }
   signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['./pages/login']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log("login failed")
      );
  }

  logout() {
   
  }

  getToken() {
   
  }

  isAuthenticated() {
    
  }
}
