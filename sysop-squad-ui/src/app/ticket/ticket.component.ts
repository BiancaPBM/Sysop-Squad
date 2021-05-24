import { Component, Input, OnInit } from '@angular/core';
import { Status } from './status.model';
import { Ticket } from './ticket.model';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
 @Input() ticket: Ticket = new Ticket() ;
  statusOfTicket:string ="";
  constructor() { }

  ngOnInit(): void {
    this.statusOfTicket = Status[this.ticket.status];
  }

}
