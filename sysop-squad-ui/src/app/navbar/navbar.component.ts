import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../log-in/authentication.service';
import { MyProfileService } from '../my-profile/my-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
    isLoggedIn: Boolean = false;
    username : string | null ='';
    constructor(private authenticationService: AuthenticationService,
                private myProfileService: MyProfileService,
                private router: Router) { }

  ngOnInit(): void {
   this.isLoggedIn = this.authenticationService.isAuthenticated();
    this.username = this.myProfileService.getUsername();
  }

  onLogOut(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    this.isLoggedIn = false;
    this.router.navigate(['form-component'])
  }
  ngOnChanges(){
    this.isLoggedIn = this.authenticationService.isAuthenticated();

  }

}
	