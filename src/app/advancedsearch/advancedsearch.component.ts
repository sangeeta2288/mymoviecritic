import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  Genre: number[];
  myGenres: IMultiSelectOption[];
  http: Http;
  selectedGenres = [];
  results = [];
  api_key = 'e0e7c64ea07685380dd4068b5334d37b';
  commonLink = 'https://api.themoviedb.org/3/';
  imageLink = 'https://image.tmdb.org/t/p/w500/';

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
}
