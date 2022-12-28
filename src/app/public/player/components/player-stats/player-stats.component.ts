import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent {
  @Input() player!: Player;

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

  stats(stat: number) {}
}
