import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent, CruUsersComponent} from 'crud-users-lib';

const routes: Routes = [

  { path: 'add/:type/:id', component: CruUsersComponent },
  { path: '', component: ListUsersComponent },
  { path: 'edit/:type/:id', component: CruUsersComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
