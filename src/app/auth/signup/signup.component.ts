import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl: string;
  //get an instance of http and Activated route
  constructor(private _http: Http,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  //get an instance of ngForm to pull off data from html and made a POST request to our backend
  onSignup(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    let params = JSON.stringify({ username: username, password: password, first_name: firstname, last_name: lastname, email: email });
    console.log(params);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this._http.post('http://127.0.0.1:8000/api/v1/usercreate/', params, {
      headers: headers
    }).subscribe
      (
      data => {
        this.router.navigate(['home']);
      },
    );
  }
}
