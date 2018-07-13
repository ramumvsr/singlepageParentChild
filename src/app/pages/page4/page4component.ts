 import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {listarr} from '../../list/menu.service';
@Component({
    selector: 'page',
    templateUrl: './page4template.html',
  
})
export class Page4 {

  constructor(private appService: AppService) {
       
    }
    ngOnInit(){
        this.appService.passValue(listarr[3].name);
    }
 }