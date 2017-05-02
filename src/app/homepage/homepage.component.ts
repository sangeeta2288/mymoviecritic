import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
	http: Http;
	nowplayingmovies = [];
	topratedmovies = [];
	api_key = 'e0e7c64ea07685380dd4068b5334d37b';
	commonLink = 'https://api.themoviedb.org/3/';
	imageLink = 'https://image.tmdb.org/t/p/w500/';

	constructor(http: Http) {
		this.http = http;
	}

	
	ngOnInit() {
		let nowplayingApiLink = `${this.commonLink}movie/now_playing?api_key=${this.api_key}`;
		let topratedApiLink = `${this.commonLink}movie/top_rated?api_key=${this.api_key}`;

		console.log(nowplayingApiLink);
		this.http.request(nowplayingApiLink)
		 .subscribe((res: Response)=> {
			this.nowplayingApiLink = (res.json()).results;
		 });
		
		console.log(topratedApiLink);
		this.http.request(topratedApiLink)
		 .subscribe((res: Response)=> {
			this.topratedmovies = (res.json()).results;
		 });
		
	}  
}
