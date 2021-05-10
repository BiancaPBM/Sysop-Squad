import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../ticket-list/ticket.service';
import { Ticket } from '../ticket/ticket.model';
import { AgentSolutionsService } from './agent-solutions.service';


@Component({
  selector: 'app-agent-solutions',
  templateUrl: './agent-solutions.component.html',
  styleUrls: ['../form/form.component.css']
})
export class AgentSolutionsComponent implements OnInit {
  tickets : Ticket[] = [];
  constructor(private ticketService : TicketsService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      data => this.tickets = data);
      console.log (this.tickets)
  }

}
