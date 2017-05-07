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
  Title = "";
  Year = "";
  Cast = "";
  Votes = "";
  myGenres: IMultiSelectOption[];
  http: Http;
  selectedGenres = [];
  results = [];
  api_key = 'e0e7c64ea07685380dd4068b5334d37b';
  commonLink = 'https://api.themoviedb.org/3/';
  imageLink = 'https://image.tmdb.org/t/p/w500/';
  blankSearch = false;
  emptyResults = false;

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
  this.results = [];
  this.blankSearch = false;
  console.log(this.Genre);//id list = [28,16]
    this.selectedGenres = [];//genrelist = [Action, adventure, comedy....]
    //map 'Genre' ids to selectedGenres names
    this.Genre.forEach((item) => {
        const filteredGenres = this.myGenres.filter((g) => { return g.id == item; });
        filteredGenres.forEach((genre) => {
            if(!this.selectedGenres.includes(genre.name)){
                this.selectedGenres.push(genre.name);
            }
        });
    });
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
}
