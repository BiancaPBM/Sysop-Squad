import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
 @Input() ticket: Ticket = new Ticket() ;
  constructor() { }

  ngOnInit(): void {
  }

}
