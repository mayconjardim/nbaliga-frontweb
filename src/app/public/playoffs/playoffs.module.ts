import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';
import { PlayoffsTableComponent } from './components/playoffs-table/playoffs-table.component';

export const routes: Routes = [{ path: '', component: PlayoffsComponent }];

@NgModule({
  declarations: [PlayoffsComponent, PlayoffsTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlayoffsModule {}
