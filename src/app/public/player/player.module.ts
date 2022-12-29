import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';

import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerRatingsComponent } from './components/player-ratings/player-ratings.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { PlayerComponent } from './containers/player/player.component';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeaderComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgPipesModule,
    MatIconModule,
  ],
})
export class PlayerModule {}
