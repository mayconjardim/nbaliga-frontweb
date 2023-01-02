import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { PlayoffsTableComponent } from './components/playoffs-table/playoffs-table.component';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';
import { PlayoffsStatsComponent } from './containers/playoffs-stats/playoffs-stats.component';
import { PlayoffsStatsTableComponent } from './components/playoffs-stats-table/playoffs-stats-table.component';

export const routes: Routes = [
  { path: '', component: PlayoffsComponent },
  { path: 'stats', component: PlayoffsStatsComponent },
];

@NgModule({
  declarations: [
    PlayoffsComponent,
    PlayoffsTableComponent,
    PlayoffsStatsComponent,
    PlayoffsStatsTableComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
})
export class PlayoffsModule {}
