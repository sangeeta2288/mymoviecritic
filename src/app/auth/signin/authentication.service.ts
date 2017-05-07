import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    
    constructor(private http: Http) { }

    login(username: string, password: string) {
     
    let params = JSON.stringify({username: username , password: password });
    console.log(params);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.post('http://127.0.0.1:8000/api/v1/user/login/', params , {
      headers: headers
    })
}

   // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });