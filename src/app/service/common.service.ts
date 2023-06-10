import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {ModelSchemaMetadata} from "../shared/model-schema-metadata";
import {selectItemByModuleNameFromCart} from "../shared/state/counter.selector";
import {addItemToMetadata} from "../shared/state/counter.actions";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private deviceDetector:DeviceDetectorService,
              private router:Router,
              private http:HttpClient,private store: Store<{ cart: ModelSchemaMetadata }>) { }

  public isOpen = new BehaviorSubject<boolean>(false);
  public  baseUrl = environment.apiEndpoint;

  getSideBarHeight(){
      return screen.availHeight - 140;
  }

  getSideBarType(){
    if(this.deviceDetector.isMobile() || this.deviceDetector.isTablet()){
      return 'mini-sidebar'
    }
    return 'mini-sidebar'
  }

  public toggleSideBar(): void {
    this.isOpen.next(!this.isOpen.value);
    console.log('Im inside toggle');
  }

  navigateTo(url:string) {
    this.router.navigateByUrl(url);
  }

  // @ts-ignore
  apiCall( type: string, url: string, body= {}, header = {} ) {
    url = environment.apiEndpoint+url;

    //
    switch (type.toLowerCase()){
      case 'get': {
        return this.http.get(url, header).pipe(map(data => {

          return data
        }));
      }
      case 'post': {
        return this.http.post(url, body,header).pipe(map(data => {

          return data
        }));
      }
      case 'put': {
        return this.http.put(url, body);
      }
      case 'delete': {
        return this.http.delete(url);
      }
    }
  }

  getMetadataObject(moduleName:string){
    let allItems$ = this.store.select(selectItemByModuleNameFromCart(moduleName))
    allItems$.subscribe((itemFromStore)=>
    {
      if(itemFromStore==undefined){
        this.apiCall('post',`/api/v1/admin/getSchemaMetadataByModuleName`, {
          module_name:moduleName
        }).subscribe(
          (data:any)=>{
            if(data['success']){
              console.log(data);
              const metadata = data.data;
              this.store.dispatch(addItemToMetadata({
                modelItem:{
                  create_api_link:metadata.create_api_link,
                  create_api_object:metadata.create_api_object,
                  edit_api_link:metadata.edit_api_link,
                  edit_api_object :metadata.edit_api_object ,
                  module_name:metadata.module_name,
                  get_all_api_link:metadata.get_all_api_link,
                  get_all_api_object:metadata.get_all_api_object,
                }
              }))
            }else{
              console.log(data);
            }
          },error=>{
            console.log(error);
          }
        )
      }
    }
     )

    return allItems$;
  }

  getLoggedInUser(){
    let userDetails = localStorage.getItem('userData')
    return userDetails;
  }

}
