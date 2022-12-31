import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { StatisticsComponent } from './container/statistics/statistics.component';

export const routes: Routes = [{ path: '', component: StatisticsComponent }];

@NgModule({
  declarations: [StatisticsComponent, StatisticsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    OrderModule,
    MatIconModule,
  ],
})
export class StatisticsModule {}
