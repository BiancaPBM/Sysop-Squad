import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component'
import { MenuComponent } from './menu/menu.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketListComponent } from './ticket-list/ticket-list.component'
import { AgentSolutionsComponent } from './agent-solutions/agent-solutions.component'
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path:'my-profile', component: MyProfileComponent,canActivate:[AuthGuardService]},
  { path: 'form-component', component: FormComponent,canActivate:[AuthGuardService] },
  { path: 'log-in', component: LogInComponent, },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'tickets', component: TicketListComponent,canActivate:[AuthGuardService] },
  { path: 'agent-solutions', component: AgentSolutionsComponent, canActivate:[AuthGuardService]},
  { path: 'settings', component: SettingsComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
