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

    
  constructor(http: Http) {
        this.http = http;
    }

   
  }     
      };
