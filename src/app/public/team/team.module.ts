import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './containers/team/team.component';
import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { MatTabsModule } from '@angular/material/tabs';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [TeamComponent, TeamHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTabsModule],
})
export class TeamModule {}
