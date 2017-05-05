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

  constructor(private _http: Http,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    let params = JSON.stringify({username: username , password: password , first_name: firstname , last_name: lastname , email: email });
    console.log(params);
    // let params = 'json=' + json;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this._http.post('http://127.0.0.1:8000/api/v1/usercreate/', params , {
      headers: headers
    }).subscribe
    // (function(data){
    //   console.log('received response');
    // });
    (
      data => {
        this.router.navigate(['Home']);
      },
      );
  }
}
