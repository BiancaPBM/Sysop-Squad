import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTicketComponent } from './agent-ticket.component';

describe('AgentTicketComponent', () => {
  let component: AgentTicketComponent;
  let fixture: ComponentFixture<AgentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
