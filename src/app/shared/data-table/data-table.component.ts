import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SearchPipe } from '../../helpers/search.pipe';
import { IUserRegistration } from '../../login/models/user.model';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [SearchPipe]
})
export class DataTableComponent implements OnInit {
  // searchText!: FormControl;

  @Input() columnList: any[] = [];
  data: any;
  noOfItemsPerPage: number = 4;
  @Input() set tableData(value){
    this.data = value;
    this.dataToShow = value.slice(0, 4);
    console.log(this.dataToShow)
  }

  @Output() emitAction = new EventEmitter();
  currentPage: number = 0;
  
  // usersList: IUserRegistration[] =[];
  searchText!: string;
  dataToShow: any[];
  // usersList$!: Observable<any>;
  // subscription!: Subscription;
  // constructor(private login: LoginService, private search: SearchPipe, private router: Router) { }
  // userId:any;
  ngOnInit(): void {
    // this.login.isLoading$.next(true);
    // setTimeout(() => {
    // this.usersList$= this.login.login();
    // this.login.isLoading$.next(false);
    // }, 1000);
    // this.searchText = new FormControl('');
    // this.searchText.valueChanges.subscribe(value => {
    // this.search.transform(this.usersList, value);
    // })

    
  }

  // EditUser(user: IUserRegistration) {
  //   this.router.navigate(['/edit-user'], { state: { user } });
  // }

  // deleteuser(user: any){
    // this.login.isLoading$.next(true);
      // this.login.removeuser(user.id).subscribe(res => {
        // this.usersList$= this.login.login();
        // this.login.isLoading$.next(false);
      // });
    
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }

  buttonEvent(event, action) {
    this.emitAction.emit({...event, action})
  }

  prevPatch() {
    this.dataToShow = [];
    this.dataToShow = this.data.slice(this.currentPage-4, this.currentPage)
    this.currentPage = this.currentPage - 4;
   }

  nextPatch() {
    this.currentPage = this.currentPage + this.noOfItemsPerPage;
    this.dataToShow = [];
    this.dataToShow = this.data.slice(this.currentPage, this.currentPage+this.noOfItemsPerPage);
   }

}
