import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent {
  @Input() player!: Player;

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  removeLeading0(numero: any) {
    if (numero > 0) {
      let num = numero;
      let text = num.toString();
      text = text.replace(/^[0]+/, '');
      text = text.slice(0, +4);
      return text;
    } else {
      return '';
    }
  }

  getSeason(season: any) {
    let seasons = season + 1;
    seasons = seasons.toString();
    seasons = seasons.substring(2);
    return season + '-' + seasons;
  }
}
