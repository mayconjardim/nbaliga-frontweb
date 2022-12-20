import { Component, Input } from '@angular/core';

import { Team } from '../../models/team';

@Component({
  selector: 'team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.scss'],
})
export class TeamRosterComponent {
  @Input() team!: Team;
  playerImg = 'assets/images/players/';
  png = '.png';

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

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'PG';
      case 4:
        return 'SG';
      case 3:
        return 'SF';
      case 2:
        return 'PF';
      default:
        return 'C';
    }
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }

  getHeight(height: any) {
    const ft = Math.floor(height / 12);
    const inc = height % 12;
    return ft + "'" + inc;
  }
}
