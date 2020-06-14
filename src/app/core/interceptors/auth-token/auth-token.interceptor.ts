import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
//service
import { AuthTokenService } from '@backend/services/auth/auth-token/auth-token.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authTokenService: AuthTokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.authTokenService.cloneHeaders(request);
    return next.handle(request);
  }
}
