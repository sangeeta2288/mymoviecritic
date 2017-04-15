import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   
title = 'MyMovieCritic';
    link = 'https://www.omdbapi.com/?t=';
    http: Http;
    giphies = [];
    show: boolean = true;

    
  constructor(http: Http) {
        this.http = http;
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
