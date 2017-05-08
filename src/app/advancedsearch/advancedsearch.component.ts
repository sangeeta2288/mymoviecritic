import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {RatingModule} from "ngx-rating";

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  Genre: number[];
  blankSearch = false;
  Title = "";
  Year = "";
  Cast = "";
  Votes = "";
  inValidInputMessage = "";
  myGenres: IMultiSelectOption[];
  http: Http;
  selectedGenres = [];
  results = [];
  link = 'https://www.omdbapi.com/?t=';
  mylink = 'http://127.0.0.1:8000/api/v1/review/?format=json&tid=';
  myuserlink = "http://127.0.0.1:8000/api/v1/usercritic";
  movieTitleToRottenRatingMap = {};
  giphies = [];
  reviews = [];
  userreviews;
  critics;
  avg;
  customavg;

  api_key = 'e0e7c64ea07685380dd4068b5334d37b';
  commonLink = 'https://api.themoviedb.org/3/';
  imageLink = 'https://image.tmdb.org/t/p/w500/';
  emptyResults = false;
  starsCount = 0;

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    //Set from movie db api
    this.myGenres = [];
    let genreApiLink = `${this.commonLink}genre/movie/list?api_key=${this.api_key}`;
    this.http.request(genreApiLink)
        .subscribe((res: Response) => {
          this.myGenres = res.json().genres;
         });
  }

    //called on submit (click)
  Submit() {
    //If blank search warn user.
    if((!this.Genre || !this.Genre.length) && (!this.Title || this.Title == "")){
      this.blankSearch = true;
      return;
    }
    this.blankSearch = false;

    let doTitleSearch = false;

    if(this.Title && this.Title != "")
      doTitleSearch = true;

    let doGenreSearch = false;
    if(!doTitleSearch)
      doGenreSearch = true;

    this.results = [];
    this.blankSearch = false;
    console.log(this.Genre);//id list = [28,16]

    //Get top 3 cast names if entered by user
    let castList = [];
    if(this.Cast != ''){
      //list of cast ids
      //castList = this.GetCastListByKeyword();
    }

    if(doTitleSearch){
      let extLink = `${this.commonLink}search/keyword?api_key=${this.api_key}`;
      let query = `&query=${this.Title}&page=1`;
      extLink = `${extLink}${query}`;

      let keywordList = [];
      this.http.request(extLink)
        .subscribe((res: Response)=> {
          keywordList = (res.json()).results;
          if(keywordList && keywordList.length)
            this.GetMovieByKeywordList(keywordList);
          else
            this.emptyResults = true;
        });
    }

    //form of url = 'https://api.themoviedb.org/3/genre/28,12/movies?api_key=e0e7c64ea07685380dd4068b5334d37b';
    let extLink = `${this.commonLink}genre/${this.Genre}/movies?api_key=${this.api_key}`;

    this.http.request(extLink)
    .subscribe((res: Response)=> {
        this.results = (res.json()).results;
    });
  }

  //called on Reset (click)
  Reset(){
    this.Genre = [];
    this.results = [];
  }

  GetMovieByKeywordList(keywords: any[]):any[]{
    let extLink = `${this.commonLink}discover/movie?api_key=${this.api_key}`;
    let query = `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    extLink = `${extLink}${query}`;
    let keyword = keywords[0].id;
    extLink = `${extLink}&with_keywords=${keyword}`;

    this.http.request(extLink)
      .subscribe((res: Response)=> {
        this.results = (res.json()).results;
        if(!this.results)
          this.emptyResults = true;
      });
    return([]);
  }

  //Get results for Title based search
  GetTitleSearchResults():any[]{
    //Search by title
    return([])
  }

  //Get results for Genre based search
  GetGenreSearchResults():any[]{
    return([])
  }

  //Here we get list of casts by taking cast field's value
  GetCastListByKeyword():any[]{
    return([])
  }

  GetSelectedGenres(): any[] {
    if(!this.Genre || !this.Genre.length)
      return([]);

    let selectedGenres = [];//genrelist = [Action, adventure, comedy....]
    //map 'Genre' ids to selectedGenres names
    this.Genre.forEach((item) => {
      const filteredGenres = this.myGenres.filter((g) => { return g.id == item; });
      filteredGenres.forEach((genre) => {
        if(!selectedGenres.includes(genre.name)){
          selectedGenres.push(genre.name);
        }
      });
    });
    return(selectedGenres);
  }
}
