import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SearchPipe } from '../helpers/search.pipe';
import { IUserRegistration } from '../login/models/user.model';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [SearchPipe]
})
export class DataTableComponent implements OnInit {
  // searchText!: FormControl;

  usersList: IUserRegistration[] =[];
  searchText!: string;
  usersList$!: Observable<any>;
  subscription!: Subscription;
  constructor(private login: LoginService, private search: SearchPipe, private router: Router) { }
  userId:any;
  ngOnInit(): void {
    // this.login.isLoading$.next(true);
    // setTimeout(() => {
    this.usersList$= this.login.login();
    // this.login.isLoading$.next(false);
    // }, 1000);
    // this.searchText = new FormControl('');
    // this.searchText.valueChanges.subscribe(value => {
    // this.search.transform(this.usersList, value);
    // })
  }

  EditUser(user: IUserRegistration) {
    this.router.navigate(['/edit-user'], { state: { user } });
  }

  deleteuser(user: any){
    // this.login.isLoading$.next(true);
      this.login.removeuser(user.id).subscribe(res => {
        this.usersList$= this.login.login();
        // this.login.isLoading$.next(false);
      });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
