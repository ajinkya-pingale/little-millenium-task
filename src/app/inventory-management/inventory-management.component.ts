import { Component, OnInit } from '@angular/core';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {
  sideBarType='';
  showSideBar=false

  constructor(private commonService:CommonService) {
    this.commonService.isOpen.subscribe(x => this.showSideBar = x);
  }

  ngOnInit(): void {
    this.sideBarType=this.commonService.getSideBarType()
  }

}
