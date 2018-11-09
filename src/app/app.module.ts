import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrudUsersLibModule } from 'crud-users-lib';
import { EndpointLibModule, EndpointService } from 'endpoint-lib';
import { NavBarComponent } from 'top-bar-lib';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function init_app(firstLoadService: EndpointService) {
  return () => firstLoadService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    CrudUsersLibModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [EndpointService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [EndpointService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
