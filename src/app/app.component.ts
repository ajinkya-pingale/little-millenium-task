import {Component, HostListener, OnInit} from '@angular/core';
import {CommonService} from "./service/common.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private commonService:CommonService) {

  }

  ngOnInit() {
  }




}
