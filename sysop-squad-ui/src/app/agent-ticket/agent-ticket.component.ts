import { Component, Input, OnInit } from '@angular/core';
import { TicketsService } from '../ticket-list/ticket.service';
import { Ticket } from '../ticket/ticket.model';
import { AgentTicket } from './agent-ticket.model';

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
