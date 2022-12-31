import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { StatisticsComponent } from './container/statistics/statistics.component';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderModule } from 'ngx-order-pipe';

export const routes: Routes = [{ path: '', component: StatisticsComponent }];

@NgModule({
  declarations: [StatisticsComponent, StatisticsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    OrderModule,
  ],
})
export class StatisticsModule {}
