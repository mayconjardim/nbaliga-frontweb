import { Component, Input } from '@angular/core';

import { Team } from '../../models/team';

@Component({
  selector: 'team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss'],
})
export class TeamHeaderComponent {
  @Input() team!: Team;
  @Input() teams!: Team[];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }

  findPosition(prop: string): any {
    if (this.team.points > 0) {
      let sortedTeams = this.teams.slice().sort((a, b) => {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        } else {
          return 0;
        }
      });
      let position = sortedTeams.findIndex(
        (t) => t.name === this.team.name && t[prop] === this.team[prop]
      );

      return position + 1 + 'th';
    } else {
      return '-';
    }
  }

  findPositionReverse(prop: string): any {
    if (this.team.points > 0) {
      let sortedTeams = this.teams.slice().sort((a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        } else if (a[prop] > b[prop]) {
          return 1;
        } else {
          return 0;
        }
      });
      let position = sortedTeams.findIndex(
        (t) => t.name === this.team.name && t[prop] === this.team[prop]
      );

      return position + 1 + 'th';
    } else {
      return '-';
    }
  }
}
