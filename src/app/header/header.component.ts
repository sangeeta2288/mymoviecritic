import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/signin/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //inject the authenticationservice 
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  //signout method
  onSignOut() {
    this.authenticationService.logout();
  }


}
