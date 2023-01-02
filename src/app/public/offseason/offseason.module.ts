import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftClassComponent } from './container/draft-class/draft-class.component';
import { RouterModule, Routes } from '@angular/router';
import { DraftClassTableComponent } from './components/draft-class-table/draft-class-table.component';

export const routes: Routes = [{ path: '', component: DraftClassComponent }];

@NgModule({
  declarations: [DraftClassComponent, DraftClassTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OffseasonModule {}