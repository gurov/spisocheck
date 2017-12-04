import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'pages/cashier-dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuardService],
  //   children: [
  //     { path: '', redirectTo: 'main', pathMatch: 'full' },
  //     { path: 'main', component: MainComponent },
  //     { path: 'new', component: NewOrdersComponent },
  //     { path: 'current', component: CurrentOrdersComponent },
  //     { path: 'completed', component: CompleteOrdersComponent },
  //     { path: 'cancelled', component: CancelledOrdersComponent },
  //     { path: 'inventory', component: InventoryComponent },

  //     { path: 'planned', component: PlannedOrdersComponent },
  //   ]
  // },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
