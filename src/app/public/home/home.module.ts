import { StandingsComponent } from './../../shared/components/standings/standings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, StandingsComponent, RouterModule.forChild(routes)],
})
export class HomeModule {}
