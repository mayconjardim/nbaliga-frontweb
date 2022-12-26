import { Component, Input } from '@angular/core';

import { Team } from '../../models/team';
import { Player } from 'src/app/public/player/models/player';

@Component({
  selector: 'team-contracts',
  templateUrl: './team-contracts.component.html',
  styleUrls: ['./team-contracts.component.scss'],
})
export class TeamContractsComponent {
  @Input() team!: Team;
  player!: Player[];
  capSpace: number = 101962352;

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

  getTotalSalary(contract: number) {
    let total;

    switch (contract) {
      case 1:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract1, 0);
        break;
      case 2:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract2, 0);
        break;
      case 3:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract3, 0);
        break;

      default:
        total = 0;
        break;
    }

    return total;
  }

  getCapSpace(total: any) {
    if (total > this.capSpace) {
      return this.capSpace - total;
    }
    return total;
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
