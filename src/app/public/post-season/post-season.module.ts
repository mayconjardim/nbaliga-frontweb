import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DraftClassComponent } from './container/draft-class/draft-class.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    DraftClassComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostSeasonModule {}
