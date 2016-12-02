import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'portfolio-application',
    templateUrl: 'application.html',
    styleUrls:['application.css']
})
export class ApplicationComponent implements OnInit {
    title = 'welcome to portfolio';
    constructor() { }
    ngOnInit() { }
}