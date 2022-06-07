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
  usersList: any[];

  checkboxData = [
    {
      name: "Angular",
      id: "anggular",
      checked: true
    },
    {
      name: "React",
      id: "react",
      checked: false
    },
    {
      name: "Javascript",
      id: "javascript",
      checked: false
    },
    {
      name: "Vue",
      id: "vue",
      checked: false
    }
];

coursesList = [];

  constructor(private loginService: LoginService) {
    
   }

  ngOnInit(): void {
  }

  changeData(event) {
    if(event.checked){
    this.coursesList.push(event);
    console.log(this.coursesList);
    }else {
      this.coursesList = this.coursesList.filter(course => course.id !== event.id);
    }
  }

}
