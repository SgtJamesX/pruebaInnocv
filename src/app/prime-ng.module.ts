import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToastModule
  ],
  exports: [
    TableModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
