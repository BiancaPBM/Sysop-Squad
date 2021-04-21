import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../log-in/authentication.service';
import { RegisterModel } from './register-model.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../log-in/log-in.component.css']
})
export class SignUpComponent implements OnInit {

  Roles: any = ['Admin', 'Agent', 'Customer'];

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)


  });

  constructor(private authenticationService: AuthenticationService,
              private router : Router) { }

  ngOnInit(): void {
  }


  OnSubmit(){
    this.authenticationService.register(new RegisterModel(this.registerForm.controls.username.value,
                                                          this.registerForm.controls.password.value,
                                                          this.registerForm.controls.email.value))
                                                          .subscribe(() => this.router.navigate(['log-in']));
  }
}
