import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { PlayoffsStatsTableComponent } from './components/playoffs-stats-table/playoffs-stats-table.component';
import { PlayoffsTableComponent } from './components/playoffs-table/playoffs-table.component';
import { PlayoffsStatsComponent } from './containers/playoffs-stats/playoffs-stats.component';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    OrderModule,
    NgxPaginationModule,
  ],
})
export class PlayoffsModule {}
