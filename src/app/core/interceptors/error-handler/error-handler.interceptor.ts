import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// service
import { ErrorHandlerService } from '@backend/services/error-handler/error-handler.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private errorHandlerService: ErrorHandlerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      this.errorHandlerService.handleError(error);
      return throwError(error);
    }));
  }
}
