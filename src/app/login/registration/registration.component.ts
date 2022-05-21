import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private login: LoginService) { 
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }

  signup(){
    this.login.registration(this.registrationForm.value).subscribe(console.log);
    this.registrationForm.reset();
  }
  ngOnInit(): void {
  }

}
