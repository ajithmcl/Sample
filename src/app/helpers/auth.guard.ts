import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router){

  }
  canActivate() {
    let isLoggedIn = sessionStorage.getItem("isLoggedIn") || false;
    if(isLoggedIn) {
      this.login.isLoggedIn$.next(JSON.parse(isLoggedIn));
    }
    if(this.login.isLoggedIn$.value) {
      return true;
    } else {
     return this.router.navigate(['']);
    }
  }
  
}
