import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { EmploymentsListComponent } from './employments-list/employments-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path :'', redirectTo: '/departments', pathMatch: 'full'},
  {path :'departments', component: DepartmentsListComponent},
  {path :'departments/:id',
   component : DepartmentDetailComponent,
   children :[
     {path :'overview', component: DepartmentOverviewComponent},
     {path :'contact', component: DepartmentContactComponent}
   ]
  },
  {path :'employees', component: EmploymentsListComponent },
  {path :'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsListComponent,EmploymentsListComponent,PageNotFoundComponent, DepartmentDetailComponent];
