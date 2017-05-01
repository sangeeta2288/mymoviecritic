import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})

export class AppComponent {

    title = 'MyMovieCritic';
    link = 'https://www.omdbapi.com/?t=';
    http: Http;
    giphies = [];
    show: boolean = true;
    avg;
    featureSelected = '';
    location: Location;

  onSelect(feature: string){
    this.featureSelected = feature;
  }

  constructor(http: Http, location: Location) {
        this.http = http;
        this.location = location;
    }

    performSearch(searchTerm: HTMLInputElement): void {
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe((res: Response) => {
                  this.show = false;
                  this.giphies = res.json();
            });
  }
      };
