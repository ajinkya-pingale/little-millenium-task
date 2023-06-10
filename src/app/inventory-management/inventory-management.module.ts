import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { InventoryManagementComponent } from './inventory-management.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import {StepsModule} from "primeng/steps";
import {SharedModule} from "../shared/shared.module";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {SidebarModule} from 'primeng/sidebar';
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    InventoryManagementComponent,
    AddInventoryComponent,
  ],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule,
    StepsModule,
    SharedModule,
    TableModule,
    MultiSelectModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TabMenuModule,
    ProgressBarModule,
    SidebarModule,
    CalendarModule,
    InputSwitchModule,
    InputTextModule,
    NgxBarcodeModule,
    ChartModule
  ]
})
export class InventoryManagementModule { }
