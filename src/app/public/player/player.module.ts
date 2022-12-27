import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './containers/player/player.component';

export const routes: Routes = [{ path: 'PlayerComponent' }];

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlayerModule {}
