 import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'titlebar',
    templateUrl: './titlebar.template.html',
    styleUrls: ['./titlebar.scss']

})
export class TitleBar {
  mySubjectVal: string;

 constructor(private appService: AppService) {
   
    }
    ngOnInit() {
    this.appService.stringSubject.subscribe(
      data => {
        this.mySubjectVal = data;
      }
    );
  }
 }