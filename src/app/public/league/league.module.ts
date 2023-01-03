import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { SalaryCapTableComponent } from './components/salary-cap-table/salary-cap-table.component';
import { SalaryCapComponent } from './containers/salary-cap/salary-cap.component';
import { DraftPicksComponent } from './containers/draft-picks/draft-picks.component';
import { DraftPicksTableComponent } from './components/draft-picks-table/draft-picks-table.component';
import { HeadToHeadComponent } from './containers/head-to-head/head-to-head.component';

export const routes: Routes = [
  { path: 'salarycap', component: SalaryCapComponent },
  { path: 'draftpicks', component: DraftPicksComponent },
];

@NgModule({
  declarations: [
    SalaryCapComponent,
    SalaryCapTableComponent,
    DraftPicksComponent,
    DraftPicksTableComponent,
    HeadToHeadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    OrderModule,
  ],
})
export class LeagueModule {}
