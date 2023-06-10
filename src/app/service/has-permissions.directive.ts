import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionsDirective implements OnInit{

  private currentUser;
  private permissions = [];
  private logicalOp = 'AND';
  private isHidden = true;

  currentUserInfo=null;
  currentUserPermission=[];
  userPermissions = []
  isAdmin=false;
  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: AuthService
  ) {
    this.currentUserInfo = this.userService.getUserInfo();
    this.userPermissions = this.userService.getPermissions()
    this.isAdmin = this.userService.isAdmin();
    for(let eachRecord of this.userPermissions){
      this.currentUserPermission.push(eachRecord.name);
    }
  }

  ngOnInit() {

  }

  @Input()
  set hasPermission(val) {
    // console.log(val)
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set hasPermissionOp(permop) {
    this.logicalOp = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if(this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;
    // console.log(this.permissions,this.currentUserInfo,this.currentUserPermission)
    if (this.currentUserInfo && this.currentUserPermission) {

      for (const checkPermission of this.permissions) {
        const permissionFound = this.currentUserPermission.find(x=>
          x.toUpperCase() === checkPermission.toUpperCase()
        );

        if (permissionFound) {
          hasPermission = true;

          if (this.logicalOp === 'OR') {
            break;
          }
        } else {
          hasPermission = false;
          if (this.logicalOp === 'AND') {
            break;
          }
        }
      }
    }
    if(this.isAdmin){
      hasPermission = true;
    }
    // console.log(hasPermission)
    return hasPermission;
  }

}
