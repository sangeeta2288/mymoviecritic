import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title = '';
  link = 'https://www.omdbapi.com/?apikey=11046d35&t=';
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
  customavg;
  route;
  router;
  resp;


// Inject route and http serveice
  constructor(http: Http, route: ActivatedRoute) {
    this.http = http;
    this.route = route;
  }
// Pulling off queryparams from the title
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.title = params['title'];
      console.log(this.title);
    });
    this.performSearch(this.title);

  }
//pull off details of the movie from the imdb
  performSearch(searchTerm): void {
    if (searchTerm) {
      let apiLink = this.link + searchTerm;
      this.http.request(apiLink)
        .subscribe((res) => {
          this.show = false;
          this.resp = res.json();
          console.log(this.resp);
          if (this.resp.Response !== "False") {
            this.giphies = this.resp;
            this.makehttp(this.giphies);
          }
        });
    }
  }
  //calculate avg Rating
  calculateavg(reviews: any): any {
    let values = reviews.objects.map(function (y) { return y.Rating });;
    let sum = values.reduce((previous, current) => current += previous);
    this.avg = Math.round((sum / values.length) * 10) / 10;
    console.log(this.avg)
  }
//get All reviews from our backend
  makehttp(giphies: any): any {
    this.mylink = this.mylink + this.giphies["imdbID"];
    this.http.request(this.mylink)
      .subscribe((res: Response) => {
        this.reviews = res.json();
        console.log(this.reviews);
        this.calculateavg(this.reviews);
        this.usercritichttp([]);

      })
  }
//get he user critics assosiation
  usercritichttp(user: any): any {
    this.http.request(this.myuserlink)
      .subscribe((res: Response) => {
        this.critics = res.json();
        console.log(this.critics);
        this.calculatcustomeavg(this.reviews, this.critics);
      })
  }

//calculate the avg rating of the user critics and filterout user critic reviews
  calculatcustomeavg(reviews: any, critics: any): any {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let usercritics = critics.objects.filter(function (x) { return x.User.id == currentUser.id });
    let usercriticsid = usercritics.map(function (x) { return x.Critic.id })
    console.log(usercriticsid);

    console.log(reviews);
    this.userreviews = reviews.objects.filter(function (y) {
      for (let x of usercriticsid) {
        if (y.Critic.id === x) {
          return true;
        }
      }
    });
    console.log(this.userreviews);


    let customvalues = this.userreviews.map(function (y) { return y.Rating });;
    let customsum = customvalues.reduce((previous, current) => current += previous);
    this.customavg = Math.round((customsum / customvalues.length) * 10) / 10;
    console.log(this.customavg)
    this.view = false;
  }
}
