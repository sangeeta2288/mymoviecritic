import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
  }
}
