import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const header = this.createHeader(req.headers);
    const request: HttpRequest<any> = req.clone({
      setHeaders: {
        'X-Auth-Token': new Date().getTime() + ''
      }
    });
    console.log(request);
    return next.handle(request).pipe(
      catchError(e => {
        console.log(e.error.error.message);
        return throwError(e);
      })
    )
  }
}
