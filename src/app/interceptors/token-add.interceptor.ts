import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenAddInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // localstorage
    // localStorage.setItem('token','1234rgthy6789')
    // localStorage.getItem('token')
    // localStorage.clear()

    const token = localStorage.getItem('token')

    // @ts-ignore
    return request.clone({
      setHeaders:{
        Authorization : 'Bearer ' + token
      }
    });


  }
}
