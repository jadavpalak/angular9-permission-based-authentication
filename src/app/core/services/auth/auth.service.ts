import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// service
import { CookieStorageService } from '../cookie-storage/cookie-storage.service';
import { AuthTokenService } from './auth-token/auth-token.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  permissions: Array<string>;

  constructor(
    private cookieStorageService: CookieStorageService,
    private router: Router,
    private authToken: AuthTokenService) {
    this.initializePermissions();
  }

  hasPermission(authGroup) {
    console.log(authGroup);
    // return of(true);
    if (this.permissions && this.permissions.find(permission => {
      return permission === authGroup;
    })) {
      return true;
    }
    return false;
  }

  initializePermissions() {
    this.permissions = ['core','home', 'user-list','user-add'];
    return of(true);
  }

  // set authentication token
  setAuthDetail(loginData) {
    const token = Math.floor((Math.random() * 100000) + 1).toString();
    const user = loginData;
    this.authToken.setAuthorizationToken = token;
    this.authToken.setCurrentUser = user;
  }

  goToUnauthorizedPage() {
    this.router.navigate(['401']);
  }

  logout() {
    console.log("logout called");
    this.exitApp(); // log the user delete all cookies
  }

  exitApp() {
    this.cookieStorageService.deleteAllCookies();
    this.router.navigate(['login']);
  }

}
