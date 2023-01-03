import { HeadToHead } from './../../models/head-to-head';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'head-to-head-table',
  templateUrl: './head-to-head-table.component.html',
  styleUrls: ['./head-to-head-table.component.scss'],
})
export class HeadToHeadTableComponent {
  @Input() h2h!: HeadToHead[];
  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  getTeamName(id: number) {
    switch (id) {
      case 5:
        return 'Celtics';
      case 6:
        return 'Nets';
      case 7:
        return 'Hornets';
      case 8:
        return 'Bulls';
      case 9:
        return 'Mavericks';
      case 10:
        return 'Pistons';
      case 11:
        return 'Warriors';
      case 12:
        return 'Rockets';
      case 13:
        return 'Pacers';
      case 14:
        return 'Clippers';
      case 15:
        return 'Lakers';
      case 16:
        return 'Grizzlies';
      case 17:
        return 'Heat';
      case 18:
        return 'Bucks';
      case 19:
        return 'Timberwolves';
      case 20:
        return 'Pelicans';
      case 21:
        return 'Knicks';
      case 22:
        return '76ers';
      case 23:
        return 'TrailBlazers';
      case 24:
        return 'Spurs';
      case 25:
        return 'Raptors';
      case 26:
        return 'Jazz';
      case 27:
        return 'SuperSonics';
      default:
        return 'Hawks';
    }
  }
}
