import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
   })
export class MyProfileService {

  constructor( ) {
   }


   getUsername(): string | null{
        return localStorage.getItem('username');
   }
  


}
