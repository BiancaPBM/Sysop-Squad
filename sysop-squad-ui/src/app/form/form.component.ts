import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ticket = new FormData();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.ticket) {
      console.log("Form Submitted!");
    }
  }
}
