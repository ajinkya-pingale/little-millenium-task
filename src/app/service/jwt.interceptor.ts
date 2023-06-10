import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {AuthService} from "./auth.service";
import { Location } from '@angular/common';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService, private location: Location) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const token = this.authenticationService.getToken();
    const isLoggedIn = this.authenticationService.checkToken();
    const domain = window.location.host;
    let requestHeaderObject = {"myClient":domain};
    if (isLoggedIn ) {
      requestHeaderObject['Authorization']=`Bearer ${token}`;
      request = request.clone({
        setHeaders: requestHeaderObject
      });
      return next.handle(request).pipe(catchError(err => {
        if (err.status === 401) {
          this.authenticationService.logout();
        }
        if (err.status === 403) {
          this.authenticationService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(err);
      }));
    }else{
      request = request.clone({
        setHeaders: requestHeaderObject
      });
      return next.handle(request);
    }


  }
}
