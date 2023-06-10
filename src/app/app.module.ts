import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScrollPanelModule} from "primeng/scrollpanel";

import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./service/jwt.interceptor";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {cartReducer, counterReducer} from "./shared/state/counter.reducer";
import { NgxPrintModule } from 'ngx-print';
import { ClickOutsideDirective } from './service/click-outside.directive';
import { DndDirective } from './service/dnd.directive';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ScrollPanelModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer }),
    NgxPrintModule,
    ChartModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
