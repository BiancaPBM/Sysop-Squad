import { Component, OnInit } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { MyProfileService } from '../my-profile/my-profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'Sysop squad';
  username : string|null ="";
  agent= "Agent";
  constructor(private profileService: MyProfileService) { }

  ngOnInit(): void {
    this.username = this.profileService.getUsername();
  }

}
