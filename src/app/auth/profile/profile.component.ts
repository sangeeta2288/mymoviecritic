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
    getmycritics() {
        this.http.request(this.myuserlink)
            .subscribe((res) => {
            this.usercritics = res.json();
            console.log(this.mycritics);
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(currentUser.id);
            this.mycritics = this.usercritics.objects.filter(function (x) { return x.User.id == currentUser.id; });
            console.log(this.mycritics);
            let a = this.mycritics.map(function (a) { return a.Critic.id; });
            this.notmycritics = this.critics.objects.filter(function (x) { return a.indexOf(x.id) == -1; });
            console.log(this.notmycritics);
        });}
   addcritic(additem) {
      
        console.log(additem);
       let user = "/api/v1/user/" + this.currentUser.id + "/";
       let critic = additem.resource_uri;
      let params = JSON.stringify({ Critic: critic, User: user, name: "k" });
        console.log(params);
        // let params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        });
    };
}