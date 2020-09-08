import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = request.clone({ params: request.params.append("apiKey", "d7638bf858ee4eb1b0f1900d0b29585a") }) //d7638bf858ee4eb1b0f1900d0b29585a 0d37ae6dbc2941e393bb0b9af24f8510
    return next.handle(authRequest);
  }
}
