import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
	http: Http;
	nowplayingmovies = [];
	topratedmovies = [];
	upcomingmovies = [];

	api_key = 'e0e7c64ea07685380dd4068b5334d37b';
	commonLink = 'https://api.themoviedb.org/3/';
	imageLink = 'https://image.tmdb.org/t/p/w500/';
	//get an instance of Activated route and http
	constructor(http: Http, private router: Router,
		private route: ActivatedRoute) {
		this.http = http;
	}

	//get he movie details from the themoviedb on initialization
	ngOnInit() {
		let nowplayingApiLink = `${this.commonLink}movie/now_playing?api_key=${this.api_key}`;
		let topratedApiLink = `${this.commonLink}movie/top_rated?api_key=${this.api_key}`;
		let upcomingApiLink = `${this.commonLink}movie/upcoming?api_key=${this.api_key}`;

		console.log(nowplayingApiLink);
		this.http.request(nowplayingApiLink)
			.subscribe((res: Response) => {
				this.nowplayingmovies = (res.json()).results;
				console.log(this.nowplayingmovies);
			});

		console.log(topratedApiLink);
		this.http.request(topratedApiLink)
			.subscribe((res: Response) => {
				this.topratedmovies = (res.json()).results;
			});

		console.log(upcomingApiLink);
		this.http.request(upcomingApiLink)
			.subscribe((res: Response) => {
				this.upcomingmovies = (res.json()).results;
			});
	}
}
