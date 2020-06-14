import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
// environment
import { environment } from '@backend/environments/environment';
// service
import { CookieStorageService } from '@backend/services/cookie-storage/cookie-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private tokenCookieName: string = environment.TOKEN_COOKIE_NAME;
  private userCookieName: string = environment.USER_COOKIE_NAME;

  constructor(private cookieStorageService: CookieStorageService) { }

  get getAuthorizationToken(): string {
    const authToken = this.cookieStorageService.getCookieValue(this.tokenCookieName);
    return authToken;
  }

  set setAuthorizationToken(tokenKey: string) {
    this.cookieStorageService.setCookieValue(this.tokenCookieName, tokenKey);
  }

  cloneHeaders(request: HttpRequest<any>): HttpRequest<any> {
    // Headers are immutable, clone the request and replace the original headers with cloned headers, updated with the authorization.
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getAuthorizationToken}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true // required for cookies
    });
  }

  get getCurrentUser() {
    return this.cookieStorageService.getCookieValue(this.userCookieName);
  }

  set setCurrentUser(user) {
    this.cookieStorageService.setCookieValue(this.userCookieName, JSON.stringify(user), 365);
  }


}
