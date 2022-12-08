import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsComponent } from '../../shared/components/results/results.component';
import { StandingsComponent } from './../../shared/components/standings/standings.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    StandingsComponent,
    RouterModule.forChild(routes),
    ResultsComponent,
  ],
})
export class HomeModule {}
