import { Component} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'TOP-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router, private languageService: LanguageService) {}

  /**
   * Go to add-user component
   */
  addUser(): void {
    this.router.navigate(['add/' + 'create/' + 0]);
  }
  /**
   * Go to home (list-user component)
   */
  goHome(): void {
    this.router.navigate(['']);
  }
  /**
   * Change the language via the language service.
   */
  switchLanguage(): void {
    this.languageService.switchLanguage();
  }

}
