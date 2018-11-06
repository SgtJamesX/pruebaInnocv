import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Prueba-Innocv';
  language: string;
  constructor(private translate: TranslateService, private router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.language = this.translate.currentLang;
  }

  /**
   * Go to add-user component
   */
  addUser(): void {
    this.router.navigate(['add']);
  }
  /**
   * Go to home (list-user component)
   */
  goHome(): void {
    this.router.navigate(['']);
  }
  /**
   * Switch the current language of the application
   */
  switchLanguage(): void {
    if (this.language === 'es') {
      this.translate.use('en');
      this.language = this.translate.currentLang;
    } else if (this.language === 'en') {
      this.translate.use('es');
      this.language = this.translate.currentLang;
    }
  }
}
