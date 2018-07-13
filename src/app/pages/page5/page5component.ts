 import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {listarr} from '../../list/menu.service';
@Component({
    selector: 'page',
    templateUrl: './page5template.html',
  
})
export class Page5 {

constructor(private appService: AppService) {
       
    }
    ngOnInit(){
        this.appService.passValue(listarr[4].name);
    }
 }