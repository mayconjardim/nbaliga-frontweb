import { Component, Input } from '@angular/core';

import { Player } from '../../models/player';
import { Statistics } from 'src/app/public/statistics/models/statistics';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.component.html',
  styleUrls: ['./player-header.component.scss'],
})
export class PlayerHeaderComponent {
  @Input() player!: Player;
  @Input() playerSeasonStats!: Statistics;

  playerImg = 'assets/images/players/';
  png = '.png';
  error = 'assets/images/players/blank.png';

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'Point Guard';
      case 4:
        return 'Shooting Guard';
      case 3:
        return 'Small Forward';
      case 2:
        return 'Power Forward';
      default:
        return 'Center';
    }
  }

  ratingColors(rating: string) {
    switch (rating) {
      case 'A+':
        return 'assets/images/utils/aa.png';
      case 'A':
        return 'assets/images/utils/a.png';
      case 'B':
        return 'assets/images/utils/b.png';
      case 'C':
        return 'assets/images/utils/c.png';
      case 'D':
        return 'assets/images/utils/d.png';
      default:
        return 'assets/images/utils/f.png';
    }
  }

  getHeight(height: any) {
    const ft = Math.floor(height / 12);
    const inc = height % 12;
    return ft + "'" + inc;
  }

  getExperience(years: number) {
    if (years == 0) {
      return 'Rookie';
    } else if (years == 1) {
      return years + ' year';
    } else {
      return years + ' years';
    }
  }

  getPpg(): number {
    if (this.player.seasonStats.length > 0) {
      return this.playerSeasonStats.ppg;
    } else {
      return 0.0;
    }
  }

  getRpg(): number {
    if (this.player.seasonStats.length > 0) {
      return this.playerSeasonStats.rpg;
    } else {
      return 0.0;
    }
  }

  getApg(): number {
    if (this.player.seasonStats.length > 0) {
      return this.playerSeasonStats.apg;
    } else {
      return 0.0;
    }
  }

  getPer(): number {
    if (this.player.seasonStats.length > 0) {
      return this.playerSeasonStats.per;
    } else {
      return 0.0;
    }
  }
}
