import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'CRUD-cru-users',
  templateUrl: './cru-users.component.html',
  styleUrls: ['./cru-users.component.css']
})
export class CruUsersComponent implements OnInit {

  id: number;
  date: Date;
  user: User;
  type: string;

  titleKey: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService, private messageService: MessageService,
    private translate: TranslateService) { }


  /**
   * Initialize the component, check the snapshot to enable update or detail functionallity
   */
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.type = this.route.snapshot.paramMap.get('type');

    if (this.type === 'create') {
      this.initializeUser();
    } else if (this.type === 'update') {
      this.resetForm();
      this.titleKey = 'APP.EDIT-USER.TITLE';
    } else if (this.type === 'detail') {
      this.resetForm();
      this.titleKey = 'APP.EDIT-USER.TITLEDETAIL';
    }
  }

  /**
   * Initialize the user.
   */
  initializeUser(): void {
    this.user = {
      id: this.id,
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
   * Navigate to home
   */
  cancelForm(): void {
    this.router.navigate(['']);
  }

  /**
   * Reset the fields with the original user data
   */
  resetForm(): void {
    if (this.type === 'create') {
      this.initializeUser();
    } else if (this.type === 'update' || this.type === 'detail') {
      this.userService.getUserById(this.id).subscribe(data => {
        this.messageService.add({
          severity: 'success', summary: this.translate.instant(this.titleKey),
          detail: 'User ' + data.id + ' Recieved'
        });
        this.user = data;
      }, error => {
        this.messageService.add({ severity: 'error', summary: this.translate.instant(this.titleKey), detail: error.message });
      });
    }
  }

  /**
   * Petition to Update a user
   */
  updateUser(): void {
    const dto_in: User = {
      id: this.id,
      name: this.user.name,
      birthdate: this.user.birthdate
    };
    this.userService.updateUser(dto_in).subscribe(data => {
      this.messageService.add({
        severity: 'success', summary: this.translate.instant('APP.EDIT-USER.TITLE'),
        detail: this.translate.instant('APP.EDIT-USER.MOK ') + dto_in.id
      });
      this.router.navigate(['']);
    }, error => {
      this.messageService.add({ severity: 'error', summary: this.translate.instant('APP.EDIT-USER.TITLE'), detail: error.message });
    });
  }

  /**
   * Petition to create a new User
   */
  createUser(): void {
    const dto_in = {
      id: this.user.id,
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

