import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  changePasswordFlag: boolean = false;
  changeNameFlag: boolean = false;
  deleteRequestFlag: boolean = false;
  changeEmailFlag: boolean = false;
  voteAgentFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
