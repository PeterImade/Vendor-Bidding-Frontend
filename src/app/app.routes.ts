import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './components/dashboard/project-details/project-details.component';
import { BidManagementComponent } from './components/dashboard/bid-management/bid-management.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'bids', component: BidManagementComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }