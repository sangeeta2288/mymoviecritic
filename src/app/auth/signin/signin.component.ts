import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private _http: Http,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
     
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
        this.authenticationService.login(username,password)
            .subscribe(
                data => {
                    this.router.navigate(['home']);
                },
                error => {
                   console.log(error);
                });}
    // let params = JSON.stringify({username: username , password: password });
    // console.log(params);
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this._http.post('http://127.0.0.1:8000/api/v1/user/login/', params , {
    //   headers: headers
    // }).subscribe(
    // ((data) => {
    //   console.log(data);
    //   console.log(this.router);
    //   this.router.navigate(['home']);
    // }),
    // data => {
    //     // this.router.navigate(['home' , data.id]);
    //   },
    // );

  

}
