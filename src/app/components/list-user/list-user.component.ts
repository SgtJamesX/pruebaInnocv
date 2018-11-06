import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {
  users: User[];
  cols: any[];

  constructor(private userService: UserServiceService, private router: Router, private messageService: MessageService,
    private translate: TranslateService) { }


  /**
   * Initialize the table and get all users from the back
   */
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'birthdate', header: 'Birthdate' }
    ];
    this.getAllUsers();
  }

  /**
   * Navigate to edit-user component (update)
   * @param id User id
   */
  editUser(id: number): void {
    this.router.navigate(['edit/' + 'update/' + id]);
  }
  /**
   * Navigate to edit-user component (detail)
   * @param id User id
   */
  detailUser(id: number): void {
    this.router.navigate(['edit/' + 'detail/' + id]);
  }
  /**
   * Delete the user by id
   * @param id User id
   */
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      this.messageService.add({
        severity: 'success', summary: this.translate.instant('APP.DELETE-USER.TITLE'),
        detail: this.translate.instant('APP.DELETE-USER.MOK') + id
      });
      this.getAllUsers();
    }, error => {
      this.messageService.add({ severity: 'error', summary: this.translate.instant('APP.DELETE-USER.TITLE'), detail: error.message });
    });
  }

  /**
   * Get all users from the service
   */
  getAllUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.messageService.add({ severity: 'success', summary: this.translate.instant('APP.LIST-USER.TITLEPOP'),
       detail: this.translate.instant('APP.LIST-USER.MOK') });
    }, error => {
      this.messageService.add({ severity: 'error', summary: this.translate.instant('APP.LIST-USER.TITLEPOP'), detail: error.message });
    });
  }

}
