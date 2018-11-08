import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string;

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.language = this.translate.currentLang;
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
