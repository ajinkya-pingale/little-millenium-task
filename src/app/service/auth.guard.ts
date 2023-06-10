import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {CommonService} from './common.service';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private  _commonService: CommonService
  ) { }

  canActivate(): boolean {

    if (this._authService.checkToken()){
      return true;
    }else {
      this._commonService.navigateTo('auth');
      return false;
    }
  }
}
