import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../log-in/log-in.component.css']
})
export class SignUpComponent implements OnInit {

  Roles: any = ['Admin', 'Agent', 'Customer'];

  constructor() { }

  ngOnInit(): void {
  }

}
