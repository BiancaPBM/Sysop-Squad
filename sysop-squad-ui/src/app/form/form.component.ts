import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from '../ticket-list/ticket.service';
import { Status } from '../ticket/status.model';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  successfullySubmitted: boolean= false;
  ticketForm = new FormGroup({
    description: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    name: new FormControl(''),


  });
  constructor(private ticketService: TicketsService, private router: Router) { }

  ngOnInit(): void {
  }
 onSubmit ()
 { var ticket = new Ticket();
    ticket.name = this.ticketForm.controls.name.value;
    ticket.description = this.ticketForm.controls.description.value;
    ticket.city = this.ticketForm.controls.city.value;
    ticket.state = this.ticketForm.controls.state.value;
    ticket.username = localStorage.getItem("username") != null?  localStorage.getItem("username"): "";
    ticket.status = Status.New;

    ticket.agent = "";

   this.ticketService.createTicket(ticket).subscribe( 
     data => {console.log(data)
      this.successfullySubmitted = true;
     return this.router.navigate(['tickets'])});
 }
}
