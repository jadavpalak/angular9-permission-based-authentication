import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
// service
import { AuthTokenService } from '@backend/services/auth/auth-token/auth-token.service';
import { Observable, of } from 'rxjs';
import { CookieStorageService } from '@backend/services/cookie-storage/cookie-storage.service';
import { AuthService } from '@backend/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authTokenService: AuthTokenService,
    private authService: AuthService,
    private cookieStorageService: CookieStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const token = this.authTokenService.getAuthorizationToken;
    if (token && token != null && token != 'undefined') {
      return this.hasRequiredPermission(route.data['auth'])
    } else {
      this.authService.logout();
      return of(false);
    }
  }

  protected hasRequiredPermission(authGroup): Observable<boolean> {
    if (this.authService.hasPermission(authGroup)) {
      return of(true);
    } else {
      this.authService.goToUnauthorizedPage();
      return of(false);
    }
  }

}
