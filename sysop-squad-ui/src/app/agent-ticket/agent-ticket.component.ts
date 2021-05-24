import { Component, Input, OnInit, Output } from '@angular/core';
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
    this.ticket.status = 3;
    var user = localStorage.getItem("username");
    if(user !== null){
      this.ticket.agent = user as string;
    }
    else this.ticket.agent = "Unknown";
   
    this.ticketService.updateTicket(this.ticket).subscribe(
      data => console.log(data)
    );
  }
}
