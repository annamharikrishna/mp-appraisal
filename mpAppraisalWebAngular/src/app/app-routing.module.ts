import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisalentryComponent } from './appraisalentry/appraisalentry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

// Add a route for the appraisal entry component with path as appraisalentry
// Add a route for the dashboard component with path as dashboard 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'appraisalentry', component: AppraisalentryComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
