import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
 currentUser = JSON.parse(localStorage.getItem('currentUser'));
  userlink = "http://127.0.0.1:8000/api/v1/user/" + this.currentUser.id + "/?format=json";
  criticlink = 'http://127.0.0.1:8000/api/v1/critic?format=json';
  myuserlink = "http://127.0.0.1:8000/api/v1/usercritic";
  http: Http;
  user = [];
  critics;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  usercritics;
  mycritics;
  notmycritics;

  
  
  constructor(http: Http) {
    this.http = http;
    this.allcritics();
    this.userDetails();
    this.getmycritics();
  }

  ngOnInit() {
    
  }
  userDetails() {
    this.http.request(this.userlink)
      .subscribe((res: Response) => {
        this.user = res.json();
        console.log(this.user);
      })};
      
  critics() {
  allcritics() {
    this.http.request(this.criticlink)
      .subscribe((res: Response) => {
        this.critics = res.json();
        console.log(this.critics);
    })};
}