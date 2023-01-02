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
  {
    path: 'statistics',
    loadChildren: () =>
      import('./public/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },

  {
    path: 'playoffs',
    loadChildren: () =>
      import('./public/playoffs/playoffs.module').then((m) => m.PlayoffsModule),
  },

  {
    path: 'offseason',
    loadChildren: () =>
      import('./public/offseason/offseason.module').then(
        (m) => m.OffseasonModule
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
