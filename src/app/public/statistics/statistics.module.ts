import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './container/statistics/statistics.component';

export const routes: Routes = [{ path: '', component: StatisticsComponent }];

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StatisticsModule {}
