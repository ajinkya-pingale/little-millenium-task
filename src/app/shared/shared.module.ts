import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FeatherModule} from "angular-feather";
import { Camera, Heart, Github,Home,Bell } from 'angular-feather/icons';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {CollapseModule} from "ngx-bootstrap/collapse";
import { JsonFormComponent } from '../shared/components/json-form/json-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {MessageModule} from "primeng/message";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {TableModule} from 'primeng/table';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import { HasPermissionsDirective } from '../service/has-permissions.directive';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { CurrencyFormatPipe } from '../service/currencyFormat';

const icons = {
  Camera,
  Heart,
  Github,
  Home,
  Bell
};

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        JsonFormComponent,
        HasPermissionsDirective,
        StockTransferComponent,

    ],
    exports: [
        SidebarComponent,
        HeaderComponent,
        JsonFormComponent,
        HasPermissionsDirective
    ],
    imports: [
        CommonModule,
        FeatherModule,
        FeatherModule.pick(icons),
        ScrollPanelModule,
        RouterModule,
        BsDropdownModule,
        CollapseModule,
        ReactiveFormsModule,
        InputNumberModule,
        MessageModule,
        InputTextModule,
        InputTextareaModule,
        CheckboxModule,
        RadioButtonModule,
        DropdownModule,
        MultiSelectModule,
        InputMaskModule,
        CalendarModule,
        FileUploadModule,
        DialogModule,
        TableModule,
        StepsModule,
        SplitButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule,
        ButtonModule,
        AccordionModule,
        SidebarModule,
    ]
})
export class SharedModule { }
