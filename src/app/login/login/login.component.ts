import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUserRegistration } from '../models/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sampleObject$!: Observable<any>;
  users!: any
  loginform!:FormGroup;
  username: any;
  password: any;
  constructor(private loginService: LoginService) { 
    this.loginform=new FormGroup({
      username:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login().subscribe(users => {
      this.users = users;
        if(this.users.find((user: IUserRegistration) => (user.username == this.loginform.value.username && user.password == this.loginform.value.password))){
          alert("Logged in successfully")
        }else{
          alert("Invalid Credentials")
        }
    })
    
  }

}
