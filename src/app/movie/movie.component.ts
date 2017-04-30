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

       makehttp(giphies:any): any {
      this.mylink = this.mylink + this.giphies["imdbID"]; 
      this.http.request(this.mylink)
                      .subscribe((res: Response) => {
                       this.view = false; 
                      this.reviews = res.json();
                      console.log(this.reviews);
                      this.calculateavg(this.reviews);
                      this.usercritichttp([]);
                      
                    })}
          usercritichttp(user:any): any { 
      this.http.request(this.myuserlink)
                      .subscribe((res: Response) => { 
                      this.critics = res.json();
                      console.log(this.critics);
                       this.calculatcustomeavg(this.reviews,this.critics);
                                        })}
       calculatcustomeavg(reviews:any,critics:any): any {
       
      let usercritics = critics.objects.filter(function(x){return x.User.id == 2});
      let usercriticsid = usercritics.map(function(x){return x.Critic.id})
      console.log(usercriticsid);

     
            
     
   
}
    }
