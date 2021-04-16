import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketListComponent } from './ticket-list/ticket-list.component'
import { AgentSolutionsComponent } from './agent-solutions/agent-solutions.component'

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'form-component', component: FormComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'agent-solutions', component: AgentSolutionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
