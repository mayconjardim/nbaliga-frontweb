import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';

import { TeamContractsComponent } from './components/team-contracts/team-contracts.component';
import { TeamDraftpicksComponent } from './components/team-draftpicks/team-draftpicks.component';
import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamRosterComponent } from './components/team-roster/team-roster.component';
import { TeamScheduleComponent } from './components/team-schedule/team-schedule.component';
import { TeamComponent } from './containers/team/team.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [
    TeamComponent,
    TeamHeaderComponent,
    TeamRosterComponent,
    TeamContractsComponent,
    TeamScheduleComponent,
    TeamDraftpicksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgPipesModule,
    MatTabsModule,
    MatIconModule,
  ],
})
export class TeamModule {}
