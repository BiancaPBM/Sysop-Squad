import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { TicketsService } from '../ticket-list/ticket.service';
import { Ticket } from '../ticket/ticket.model';

export class AgentTicket{
  id: string = "";
  description: string ="";
  user: string ="";
  agent: string = "";
  runtime: string = "";
  rating: string = ""; 
  reviews: string = "";

  constructor (){}
}
@Component({
  selector: 'agent-ticket',
  templateUrl: './agent-ticket.component.html',
  styleUrls: ['../form/form.component.css']
})
export class AgentTicketComponent implements OnInit{

  @Input() ticket: AgentTicket = new AgentTicket() ;
  constructor(private ticketService : TicketsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.ticketService.deleteTicket(this.ticket.id).subscribe(
      data => console.log(data)
    );
  }
}
