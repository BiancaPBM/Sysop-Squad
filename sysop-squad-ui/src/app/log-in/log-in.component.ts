import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { LoginModel } from './login-model.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private authenticationService : AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let login = new LoginModel(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    this.authenticationService.login(login)
    .subscribe((data) => {
                          localStorage.setItem("username", data.username);
                          localStorage.setItem("token",data.token);
                          localStorage.setItem("expiration", data.expiration);
                          this.authenticationService.isLoginSubject.next(true);
                          return this.router.navigate([''])});

  }
  private hasToken(){
    return !!localStorage.getItem('token');
    
  }
}
