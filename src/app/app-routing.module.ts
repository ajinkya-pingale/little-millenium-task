import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./inventory-management/inventory-management.module').then(m => m.InventoryManagementModule),
  //   canActivate: [AuthGuard]
  // },

  {
    path: '',
    loadChildren: () =>
      import('./inventory-management/inventory-management.module').then(
        (m) => m.InventoryManagementModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
