import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftClassComponent } from './container/draft-class/draft-class.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ path: '', component: DraftClassComponent }];

@NgModule({
  declarations: [DraftClassComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OffseasonModule {}
