import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryManagementComponent} from "./inventory-management.component";
import {AddInventoryComponent} from "./inventory/add-inventory/add-inventory.component";

const routes: Routes = [ {path : '',
  component : InventoryManagementComponent,
  children : [
    {
      path: '', component: AddInventoryComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
