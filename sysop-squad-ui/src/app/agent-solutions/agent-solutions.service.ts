import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const getAllTicketsUrl = 'https://localhost:5001/api/tickets';

@Injectable({
    providedIn: 'root',
   })
export class AgentSolutionsService {

  constructor( private http: HttpClient) {
   }
   
   getTickets(): Observable<any>{
        return this.http.get(getAllTicketsUrl);
   }
  


}
