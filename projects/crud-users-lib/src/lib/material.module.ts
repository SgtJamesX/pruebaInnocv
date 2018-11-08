import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule
  ], exports: [
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
  ]
})
export class MaterialModule { }
