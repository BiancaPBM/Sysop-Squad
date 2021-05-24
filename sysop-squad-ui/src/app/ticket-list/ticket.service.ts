import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from '../ticket/ticket.model';
const getAllTicketsUrl = 'https://localhost:5001/api/tickets';
const deleteTicket = 'https://localhost:5001/api/tickets/'
const createTicket = 'https://localhost:5001/api/tickets'
const updateTicketUrl = 'https://localhost:5001/api/tickets/'


@Injectable({
    providedIn: 'root',
   })
export class TicketsService {

  constructor( private http: HttpClient) {
   }


   getTickets(): Observable<Ticket[]>{
        return this.http.get<Ticket[]>(getAllTicketsUrl);
   }
  
   deleteTicket(id: string): Observable<any>{
      return this.http.delete(deleteTicket + id);
 }

   createTicket(ticket: Ticket): Observable<any>{
        return this.http.post(createTicket, ticket);
   }

   updateTicket(ticket:Ticket): Observable<any>{
        return this.http.put(updateTicketUrl + ticket.id, ticket);
   }


}
