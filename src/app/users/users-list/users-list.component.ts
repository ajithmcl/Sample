import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IUserRegistration } from 'src/app/login/models/user.model';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList$: Observable<any[]> = from([]);
  columnList!: string[];

  constructor(private loginService: LoginService) {
    this.usersList$ = this.loginService.login();
    this.usersList$.subscribe(users => {
      this.columnList = Object.keys(users[0])
    })
   }

  ngOnInit(): void {
  }

}
