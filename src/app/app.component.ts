import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})

export class AppComponent {
    title = 'MyMovieCritic';
    constructor() { }
};
