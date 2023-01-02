import { Component, Input } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { Player } from 'src/app/public/player/models/player';

@Component({
  selector: 'app-draft-class-table',
  templateUrl: './draft-class-table.component.html',
  styleUrls: ['./draft-class-table.component.scss'],
})
export class DraftClassTableComponent {
  @Input() players!: Player[];

  playerImg = 'assets/images/players/';
  png = '.png';

  order: string = 'futurerating';
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  sortedCollection: any[];
  p: number = 1;

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.players, 'futurerating');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
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

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
