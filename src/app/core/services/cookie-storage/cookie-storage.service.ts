import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@backend/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(private cookieService: CookieService) { }

  getCookieValue(tokenCookieName: string): string {
    return decodeURIComponent(this.cookieService.get(tokenCookieName)).replace(/"/g, '');
  }

  checkCookie(cookieName: string): boolean {
    return this.cookieService.check(cookieName);
  }

  setCookieValue(cookieName: string, value: string, expiry?: number | Date) {
    this.cookieService.set(cookieName, value, expiry, '/', environment.COOKIE_DOMAIN);
  }

  deleteCookie(cookieName: string) {
    this.cookieService.delete(cookieName, '/', environment.COOKIE_DOMAIN);
  }

  deleteAllCookies() {
    this.cookieService.deleteAll();
  }
}
