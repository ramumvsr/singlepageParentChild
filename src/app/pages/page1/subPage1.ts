import { Component, OnChanges, SimpleChanges,EventEmitter, Output,Input } from '@angular/core';

@Component({
    selector: 'subpage',
    templateUrl: './subPage1.html',
    styleUrls: ['./parent.scss']

})
export class SubPage1 {

    @Input() test: any;
    public val: any;
    mychildvalue : string;
    @Output() childtoparent=new EventEmitter();
    summaries =
    [
        "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    ];
    constructor() {
     
    }
    ngOnChanges(changes: SimpleChanges) {
        this.val = changes.test.currentValue;
    }
    filterForeCasts(filterVal: any) {
            this.mychildvalue=filterVal;
            this.childtoparent.emit(this.mychildvalue);

      }
}