import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCapComponent } from './containers/salary-cap/salary-cap.component';
import { SalaryCapTableComponent } from './components/salary-cap-table/salary-cap-table.component';

export const routes: Routes = [
  { path: 'salarycap', component: SalaryCapComponent },
];

@NgModule({
  declarations: [SalaryCapComponent, SalaryCapTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LeagueModule {}
