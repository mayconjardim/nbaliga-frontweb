import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'team/:id',
    loadChildren: () =>
      import('./public/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'player/:id',
    loadChildren: () =>
      import('./public/player/player.module').then((m) => m.PlayerModule),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
