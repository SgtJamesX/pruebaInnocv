import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    TableModule,
    ToastModule
  ],
  exports: [
    TableModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
