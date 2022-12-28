import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerComponent } from './containers/player/player.component';
import { PlayerRatingsComponent } from './components/player-ratings/player-ratings.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeaderComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatProgressBarModule],
})
export class PlayerModule {}
