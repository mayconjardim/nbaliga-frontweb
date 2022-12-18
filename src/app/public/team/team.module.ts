import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamRosterComponent } from './components/team-roster/team-roster.component';
import { TeamComponent } from './containers/team/team.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [TeamComponent, TeamHeaderComponent, TeamRosterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
  ],
})
export class TeamModule {}
