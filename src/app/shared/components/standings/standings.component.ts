import { SeasonInfoService } from './../../services/season-info.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Standings } from '../../models/standings';
import { StandingsService } from '../../services/standings.service';
import { MatIconModule } from '@angular/material/icon';
import { SeasonInfo } from '../../models/seasonInfo';

@Component({
  selector: 'standings',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent {
  standings: Standings[] = [];
  seasonInfo!: SeasonInfo[];
  imgLogo = 'assets/images/logos/';

  constructor(
    private service: StandingsService,
    private seasonService: SeasonInfoService
  ) {}

  ngOnInit(): void {
    this.service
      .read()
      .subscribe((standings: Standings[]) => (this.standings = standings));
    this.getSeason();
  }

  trackById(index: number, value: Standings) {
    return value.id;
  }

  leading(numero: any) {
    if (numero > 0) {
      let num = numero;
      let text = num.toString();
      text = text.replace(/^[0]+/, '');
      text = text.slice(0, +4);
      return text;
    } else {
      return '-';
    }
  }

  getSeason() {
    this.seasonService.getSeason().subscribe((response) => {
      this.seasonInfo = response;
      const season = this.seasonInfo[0].season;
      localStorage.setItem('season', season);
    });
  }

  teamsEast() {
    return this.standings.filter((team) => team.conference == 'East');
  }

  teamsWest() {
    return this.standings.filter((team) => team.conference == 'West');
  }
}
