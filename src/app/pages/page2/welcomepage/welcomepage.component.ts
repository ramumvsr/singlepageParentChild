import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import {listarr} from '../../../list/menu.service';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
    selector: 'page',
    templateUrl: './welcomepage.template.html',

})
export class WelcomPage {
    token: string;

    constructor(private appService: AppService) {


    }
  ngOnInit(){
        this.appService.passValue(listarr[1].name+"/Welcome");
       
    }


}