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

    //Injecting http and router sservices
    constructor(private _http: Http,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private router: Router) { }

    ngOnInit() {

    }
    //inject angular ngForm instance to pull of username and password from form
    onSignin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        this.authenticationService.login(username, password)
            .subscribe(
            data => {
                //navigate back to home after sign in
                this.router.navigate(['home']);
            },
            error => {
                console.log(error);
            });
    }

}
