import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../app.service';
import { listarr } from '../../list/menu.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'page',
    templateUrl: './page2template.html',
    styleUrls: ['page2.scss']
})
export class Page2 {
    token: string;

    constructor(private appService: AppService, private authService: AuthService) {

    }

    ngOnInit() {
        this.appService.passValue(listarr[1].name);
        firebase.initializeApp({
            apiKey: "AIzaSyAIgbZXoj7KHac-Qn50iycM4L9oOtVZSO4",
            authDomain: "loginsample-6491e.firebaseapp.com"
        });
    }
    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signinUser(email, password);

    }
}