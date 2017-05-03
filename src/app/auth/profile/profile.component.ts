import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userlink = 'http://127.0.0.1:8000/api/v1/user/7/?format=json';
  criticlink = 'http://127.0.0.1:8000/api/v1/critic?format=json';
  http: Http;
  user = [];
  critic = [];
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  constructor(http: Http) {
    this.http = http;
    // this.critics();
    this.userDetails();
  }

  ngOnInit() {
    this.http.request(this.criticlink)
        .subscribe((res: Response) => {
          this.critic = res.json();
        });
    console.log(this.critic);
  }
  userDetails() {
    this.http.request(this.userlink)
      .subscribe((res: Response) => {
        this.user = res.json();
        console.log(this.user);
      })};
      
 
};
