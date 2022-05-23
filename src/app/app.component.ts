import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading$: any;
  isLoggedIn$!: Observable<boolean>;
  title = 'sample';
  constructor(private login: LoginService){
   this.isLoading$ = this.login.isLoading$;
   this.isLoggedIn$ = this.login.isLoggedIn$;
  }
}
