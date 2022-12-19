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
    if (rating == 'A+') {
      return 'assets/images/utils/aa.png';
    } else if (rating == 'A') {
      return 'assets/images/utils/a.png';
    } else if (rating == 'B') {
      return 'assets/images/utils/b.png';
    } else if (rating == 'C') {
      return 'assets/images/utils/c.png';
    } else {
      return 'assets/image/utils/f.png';
    }
  }

  getPosition(position: number) {
    if (position == 5) {
      return 'PG';
    } else if (position == 4) {
      return 'SG';
    } else if (position == 3) {
      return 'SF';
    } else if (position == 2) {
      return 'PF';
    } else {
      return 'C';
    }
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
