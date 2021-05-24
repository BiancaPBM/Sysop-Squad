import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket.model';
import { TicketsService } from './ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['../menu/menu.component.css']
})
export class TicketListComponent implements OnInit {
 tickets : Ticket[] = [];
 username :string | null ="";
  constructor(private ticketService : TicketsService,) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      data => {this.tickets = data;
                this.username = localStorage.getItem("username")});
      
  }



}
