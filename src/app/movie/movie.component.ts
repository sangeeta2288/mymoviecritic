import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {imdb} from 'imdb-api';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
title = 'MyMovieCritic';
    link = 'https://www.omdbapi.com/?t=';
    mylink = 'http://127.0.0.1:8000/api/v1/review/?format=json&tid=';
    myuserlink = "http://127.0.0.1:8000/api/v1/usercritic";
    http: Http;
    show: boolean = true;
    view: boolean = true;
    giphies = [];
    reviews = [];
    userreviews;
    critics;
    avg;

    ngOnInit() {        
       
    }
    
  constructor(http: Http) {
        this.http = http;

    }
    performSearch(searchTerm: HTMLInputElement): void {
        var apiLink = this.link + searchTerm.value;
        this.http.request(apiLink)
            .subscribe((res: Response) => {
                  this.show = false;
                  this.giphies = res.json();
                  console.log(this.giphies);
                  this.makehttp(this.giphies);
                  

                 
            });
       calculateavg(reviews:any): any {
      let values = reviews.objects.map(function(y){return y.Rating});;
      let sum = values.reduce((previous, current) => current += previous);
      this.avg = Math.round((sum / values.length)*10)/10;
      console.log(this.avg)}
     
   
}

