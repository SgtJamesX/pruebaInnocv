import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';

const routes: Routes = [

  { path: 'add', component: AddUserComponent },
  { path: '', component: ListUserComponent },
  { path: 'edit/:type/:id', component: EditUserComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
