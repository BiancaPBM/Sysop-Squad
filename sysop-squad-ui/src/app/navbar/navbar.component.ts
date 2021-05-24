import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../log-in/authentication.service';
import { MyProfileService } from '../my-profile/my-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  isLoggedIn : Observable<boolean>;
    username : string | null ='';
    agent = "Agent";
    constructor(private authenticationService: AuthenticationService,
                private myProfileService: MyProfileService,
                private router: Router) {
                  this.isLoggedIn = authenticationService.isAuthenticated();
                 }

  ngOnInit(): void {
    this.username = this.myProfileService.getUsername();
  }

  onLogOut(){
    this.authenticationService.logout();
  
    this.router.navigate(['log-in'])
  }
  ngOnChanges(){
    this.isLoggedIn = this.authenticationService.isAuthenticated();

  }

}
	