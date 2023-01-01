import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    PlayoffsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlayoffsModule {}
