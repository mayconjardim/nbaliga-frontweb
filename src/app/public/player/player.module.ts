import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './containers/player/player.component';
import { PlayerHeaderComponent } from './components/player-header/player-header.component';

export const routes: Routes = [{ path: 'PlayerComponent' }];

@NgModule({
  declarations: [PlayerComponent, PlayerHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlayerModule {}
