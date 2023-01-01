import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { PlayoffsTableComponent } from './components/playoffs-table/playoffs-table.component';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';

export const routes: Routes = [{ path: '', component: PlayoffsComponent }];

@NgModule({
  declarations: [PlayoffsComponent, PlayoffsTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
})
export class PlayoffsModule {}
