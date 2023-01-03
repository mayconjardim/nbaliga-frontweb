import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { SalaryCapTableComponent } from './components/salary-cap-table/salary-cap-table.component';
import { SalaryCapComponent } from './containers/salary-cap/salary-cap.component';

export const routes: Routes = [
  { path: 'salarycap', component: SalaryCapComponent },
];

@NgModule({
  declarations: [SalaryCapComponent, SalaryCapTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    OrderModule,
  ],
})
export class LeagueModule {}
