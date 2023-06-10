import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  checkToken():boolean{
    return localStorage.getItem('token')!==null;
  }

  getToken(): string{
    return <string>localStorage.getItem('token');
  }


  isAdmin():boolean{
    let userInfo = this.getUserInfo()
    if(userInfo){
      let role = userInfo?.roles[0]?.name;
      if(role === "Admin" || role === "SuperAdmin"){
        return true;
      }else{
        return false;
      }
    }
    return false;

  }

  logout() {
    localStorage.clear();
    window.location.href="/"
  }

  storeUser(data,token, permissions){
    localStorage.setItem('token', token);
    localStorage.setItem("userData", data)
    localStorage.setItem("permissions", permissions)
  }

  getUserInfo(){
    let authToken = localStorage.getItem('userData');
    if(authToken !== null){
      let userDetails = JSON.parse(localStorage.getItem('userData'));
      return userDetails;
    }else{
      this.router.navigate(['login']);
    }
  }

  getPermissions(){
    let authToken = localStorage.getItem('permissions');
    if(authToken !== null){
      let userDetails = JSON.parse(localStorage.getItem('permissions'));
      return userDetails;
    }else{
      this.router.navigate(['login']);
    }
  }

}
