import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  user: User;
  date: Date;
  constructor(private router: Router, private userService: UserServiceService, private messageService: MessageService,
    private translate: TranslateService) { }

  /**
   * Initialize the component by reseting all fields
   */
  ngOnInit(): void {
    this.resetForm();
  }
  /**
   * Navigate to home
   */
  cancelForm(): void {
    this.router.navigate(['']);
  }
  /**
   * Reset the fields
   */
  resetForm(): void {
    this.user = {
      id: null,
      name: null,
      birthdate: null
    };
  }

  /**
  * Disable the create button if the fields are not correctly filled
  */
  disabledButton(): boolean {
    if (this.user.name === null || this.user.name === ''
      || this.user.birthdate === null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Petition to create a new User
   */
  createUser(): void {

    const dto_in = {
      id: 0,
      name: this.user.name,
      birthdate: this.user.birthdate.toJSON()
    };
    this.userService.createUser(dto_in).subscribe(data => {
      this.messageService.add({
        severity: 'success', summary: this.translate.instant('APP.ADD-USER.TITLE'),
        detail: this.translate.instant('APP.ADD-USER.MOK')
      });
      this.router.navigate(['']);
    }, error => {
      this.messageService.add({ severity: 'error', summary: this.translate.instant('APP.ADD-USER.TITLE'), detail: error.message });
    });
  }

}
