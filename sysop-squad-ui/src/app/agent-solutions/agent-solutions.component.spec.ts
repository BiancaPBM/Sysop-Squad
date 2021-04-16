import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSolutionsComponent } from './agent-solutions.component';

describe('AgentSolutionsComponent', () => {
  let component: AgentSolutionsComponent;
  let fixture: ComponentFixture<AgentSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
