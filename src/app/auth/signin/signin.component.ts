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

}
