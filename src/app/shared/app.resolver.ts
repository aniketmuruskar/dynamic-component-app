import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { PageBuilderService } from './page-builder.service';
import { Routes } from './routes';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<any> {
  
  constructor(
    private http: HttpClient,
    private pageBuilderService: PageBuilderService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pageName = route.url[0].path;

    const option = {
      url: Routes.fetchLocalResponse(pageName),
      // url: Routes.fetchServerResponse(pageName)
    };

    return this.http.get(option.url).pipe(
      map(data => this.onSuccess(data))
    );
  }

  private onSuccess(data: any) {
    return this.pageBuilderService.buildPage(data.pageElements);
  }
}
