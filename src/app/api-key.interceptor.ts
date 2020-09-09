import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"


@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = request.clone({ params: request.params.append("apiKey", environment.API_KEY) })
    return next.handle(authRequest);
  }
}
