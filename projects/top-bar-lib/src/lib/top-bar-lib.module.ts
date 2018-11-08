import { NgModule } from '@angular/core';
import { TopBarLibComponent } from './top-bar-lib.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import {MaterialModule} from './material.module';
import {PrimeNgModule} from './prime-ng.module';



@NgModule({
  declarations: [TopBarLibComponent, NavBarComponent],
  imports: [
    BrowserModule,
    TranslateModule,
    FormsModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [TopBarLibComponent]
})
export class TopBarLibModule { }
