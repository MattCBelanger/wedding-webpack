import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
    
export class AppComponent { 
    urlVariable: string;
    showPlay: boolean;
    videoTimeOut: any;
    classMap: any;

    constructor() { 
        this.urlVariable = '../../public/images/EdgeWalk-41.jpg';
        this.showPlay = true;
        this.classMap = {'viewHeight': false};
    }

    clicked() {
        //  <i *ngIf="showPlay" class="fa fa-play-circle fa-3x" aria-hidden="true"></i>
        if (this.urlVariable === '../../public/images/EdgeWalk-41.jpg') {
            this.urlVariable = 'http://i.imgur.com/NADwJbx.gifv';
            this.showPlay = false;
            this.classMap = {'viewHeight': true};
            this.videoTimeOut = setTimeout(() => {
                this.showPlay = true;
                this.classMap = {'viewHeight': false};
                this.urlVariable = '../../public/images/EdgeWalk-41.jpg';
            }, 18000)
        } else {
            this.urlVariable = '../../public/images/EdgeWalk-41.jpg';
            this.showPlay = true;
            this.classMap = {'viewHeight': false};
            if (this.videoTimeOut) {
                clearTimeout(this.videoTimeOut);
            }
        }
    }
}
