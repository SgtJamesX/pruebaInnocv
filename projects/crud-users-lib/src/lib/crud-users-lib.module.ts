import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CrudUsersLibComponent } from './crud-users-lib.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CruUsersComponent } from './components/cru-users/cru-users.component';
import { MaterialModule } from './material.module';
import { PrimeNgModule } from './prime-ng.module';
import { MessageService } from 'primeng/api';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [CrudUsersLibComponent, ListUsersComponent, CruUsersComponent],
  imports: [
    BrowserModule,
    TranslateModule,
    FormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
  providers: [
    MessageService, ConfirmationService],
  exports: [CrudUsersLibComponent, ListUsersComponent]
})
export class CrudUsersLibModule { }
