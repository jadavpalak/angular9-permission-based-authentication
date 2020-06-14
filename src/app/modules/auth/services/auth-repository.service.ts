import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// model
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {

  constructor(private httpClient: HttpClient) { }

  /**
  * Login user
  * HTTP POST: /api/login
  * @param {credentials} Login
  * @returns {Observable<HttpResponse<Response>>}
  * @memberof AuthRepositoryService
  */
  login(credentials: Login): Observable<any> {
    if(credentials.email === 'test@example.com' && credentials.password === 'secret'){
      return of(true);
    } else {
      return of(false);
    }
  }

}
