import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {listarr} from '../../list/menu.service';

@Component({
    selector: 'page',
    templateUrl: './page1template.html',
       styleUrls: ['./parent.scss']

})
export class Page1 {
    myTextVal: string;
    summaries =
    [
        "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    ];
    val: any;
    childval: any;
    constructor(private appService: AppService) {
       
    }
    ngOnInit(){
        this.appService.passValue(listarr[0].name);
    }
    filterForeCasts(filterVal: any) {
        this.val = filterVal;

    }
    childtoparent(event) {
        this.childval = event;
    }
}