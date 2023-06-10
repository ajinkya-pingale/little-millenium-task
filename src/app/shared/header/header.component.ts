import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSideBar=false
  isCollapsed = true;
  @ViewChild("inputBox") _el: ElementRef;
  constructor(private commonService:CommonService, private authService: AuthService) { }

  ngOnInit(): void {
    this.commonService.isOpen.subscribe(x => this.showSideBar = x);
  }

  onSideBarClick(){
    this.commonService.toggleSideBar();
  }

  logout(){
    this.authService.logout()
  }

  @HostListener('window:keyup', ['$event'])
       keyEvent(event: KeyboardEvent) {
        console.log(event);

          if (event.ctrlKey) {
            if (event.key === 'm') {
              this._el.nativeElement.focus();
            }
          }
          if (event.metaKey) {
            if (event.key === 'k') {
              this._el.nativeElement.focus();
            }
          }
    }

  onKey(){

  }

  // getInitial(){
  //   var UserDetails = JSON.parse(localStorage.getItem('userData'));
  //   var userName = ---
  //   return
  // }

  getSecondLetter(){
    var UserDetails = JSON.parse(localStorage.getItem('userData'));
    var userName = UserDetails['name']
    return userName.split(' ').map(n => n[1]).join('')
  }
}
