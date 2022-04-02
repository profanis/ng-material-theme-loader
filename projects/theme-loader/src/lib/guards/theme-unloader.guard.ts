import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { ThemeLoaderService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class ThemeUnloader implements CanDeactivate<any> {
  constructor(private themeLoaderService: ThemeLoaderService) {}

  public canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    this.themeLoaderService.restoreDefaultStyle();
    return true;
  }
}
