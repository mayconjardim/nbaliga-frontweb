import { Schedule } from './../../../schedule/models/schedule';
import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-schedule',
  templateUrl: './team-schedule.component.html',
  styleUrls: ['./team-schedule.component.scss'],
})
export class TeamScheduleComponent {
  @Input() team!: Team;
  @Input() schedule!: Schedule[];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  getGameType(day: number) {
    if (day >= 1 && day <= 14) {
      return 'PRESEASON';
    } else if (day >= 15 && day <= 186) {
      return 'REGULAR SEASON';
    } else {
      return 'PLAYOFFS';
    }
  }

  getWinner(away: string, home: string, awayScore: number, homeScore: number) {
    if (this.team.name == away) {
      if (awayScore > homeScore) {
        return 'W ';
      } else {
        return 'L ';
      }
    } else if (this.team.name == home) {
      if (awayScore > homeScore) {
        return 'L ';
      } else {
        return 'W ';
      }
    }
    return '-';
  }
}
