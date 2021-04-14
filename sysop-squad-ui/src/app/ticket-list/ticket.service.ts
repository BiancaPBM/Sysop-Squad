import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const getAllTicketsUrl = 'http://localhost:5000/api/v1/Tickets';

@Injectable({
    providedIn: 'root',
   })
export class TicketsService {

  constructor( private http: HttpClient) {
   }


   getTickets(): Observable<any>{
        return this.http.get(getAllTicketsUrl);
   }
  


}
