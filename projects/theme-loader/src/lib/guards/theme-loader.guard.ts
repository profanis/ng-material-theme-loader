import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeLoaderService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class ThemeLoader implements CanActivate {
  constructor(private themeLoaderService: ThemeLoaderService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const { isDefault, themeName } = route.data;

    this.themeLoaderService.init(themeName, isDefault);
    return true;
  }
}
