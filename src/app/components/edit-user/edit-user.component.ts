import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {

  id: number;
  date: Date;
  user: User;
  type: string;

  titleKey: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserServiceService, private messageService: MessageService,
    private translate: TranslateService) { }


  /**
   * Initialize the component, check the snapshot to enable update or detail functionallity
   */
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.type = this.route.snapshot.paramMap.get('type');
    this.resetForm();

    if (this.type === 'update') {
      this.titleKey = 'APP.EDIT-USER.TITLE';
    } else {
      this.titleKey = 'APP.EDIT-USER.TITLEDETAIL';
    }
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


}
