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
import { HeadToHeadTeamsComponent } from './components/head-to-head-teams/head-to-head-teams.component';

export const routes: Routes = [
  { path: 'salarycap', component: SalaryCapComponent },
  { path: 'draftpicks', component: DraftPicksComponent },
  { path: 'headtohead', component: HeadToHeadComponent },
];

@NgModule({
  declarations: [
    SalaryCapComponent,
    SalaryCapTableComponent,
    DraftPicksComponent,
    DraftPicksTableComponent,
    HeadToHeadComponent,
    HeadToHeadTeamsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    OrderModule,
  ],
})
export class LeagueModule {}
