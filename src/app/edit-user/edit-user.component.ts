import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  registrationForm: FormGroup;
  userId: any;
  constructor(private router: Router, private login: LoginService) {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
    this.registrationForm.patchValue(this.router.getCurrentNavigation()?.extras.state?.user);
    this.userId= this.router.getCurrentNavigation()?.extras.state?.user.id
   }

  signup(){
    this.login.updateUser(this.registrationForm.value, this.userId).subscribe(users => console.log(users));
  }

  removeuser(){
    this.login.removeuser(this.userId);
  }
  ngOnInit(): void {
  }

}
