import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { listarr } from '../../list/menu.service';
@Component({
    selector: 'page',
    templateUrl: './page3template.html',

})
export class Page3 {

    constructor(private appService: AppService) {
     

    }

    ngOnInit() {
        this.appService.passValue(listarr[2].name);
    }
    urls = [];
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event) => {
                    // console.log(event.target.result);
                    // this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }

}