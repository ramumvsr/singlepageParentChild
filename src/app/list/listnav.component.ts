 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {listarr} from './menu.service';


@Component({
    selector: 'listbar',
    templateUrl: 'listnav.template.html',
    styleUrls: ['listnavcss.scss']
})
export class ListComponent {
list:any;
 constructor() {
     this.list=listarr;
    }
 }
 
