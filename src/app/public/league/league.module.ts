import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCapComponent } from './containers/salary-cap/salary-cap.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    SalaryCapComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LeagueModule {}
