import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { SearchPipe } from 'src/app/helpers/search.pipe';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  // searchText!: FormControl;

  noOfPages: number = 0;
  @Input() columnList: any[] = [];
  data: any;
  noOfItemsPerPage: number = 4;
  pagesArray: number[];
  selectedIndex: number = 1;
  @Input() set tableData(value) {
    this.data = value;
    this.dataToShow = value?.length ? value.slice(0, 4) : [];
    this.noOfPages = this.data?.length / 4;
    this.pagesArray = [1, 2, 3, 4];
    // this.setPagination();
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
    this.emitAction.emit({ ...event, action })
  }

  // prevPatch() {
  //   this.dataToShow = [];
  //   this.dataToShow = this.data.slice(this.currentPage-4, this.currentPage)
  //   this.currentPage = this.currentPage - 4;
  //  }

  // nextPatch() {
  //   this.currentPage = this.currentPage + this.noOfItemsPerPage;
  //   this.dataToShow = [];
  //   this.dataToShow = this.data.slice(this.currentPage, this.currentPage+this.noOfItemsPerPage);
  //  }

  goToPage(page: number, i) {
    this.currentPage = page;
    this.selectedIndex = i;
    this.dataToShow = [];
    let a = page - 1;
    this.dataToShow = this.data.slice((a * 4), (a * 4) + 4);
    this.pagesArray = [];
    this.pagesArray = [page, page + 1, page + 2, page + 3];
  }

  prevPage() {
    this.goToPage(this.currentPage - 1, 0);
  }

  nextPage() {
    this.goToPage(this.currentPage + 1, 0);
  }

  sort(sortType, column) {
    this.dataToShow.sort((rowData1, rowData2) => {
      if (rowData1[column.columnName] > rowData2[column.columnName]) {
        return sortType == 'dsc' ? -1 : 1
      } else {
        return sortType == 'dsc' ? 1 : -1
      }
    })
  }

}
