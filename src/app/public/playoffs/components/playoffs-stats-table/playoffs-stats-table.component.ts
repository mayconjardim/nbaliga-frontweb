import { Component, Input } from '@angular/core';
import { PlayoffStats } from '../../models/playoffStats';
import { PlayerBasic } from 'src/app/public/player/models/player-basic';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'playoffs-stats-table',
  templateUrl: './playoffs-stats-table.component.html',
  styleUrls: ['./playoffs-stats-table.component.scss'],
})
export class PlayoffsStatsTableComponent {
  @Input() offStats!: PlayoffStats[];
  @Input() players!: PlayerBasic[];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  order: string = 'ppgPct';
  reverse: boolean = true;
  caseInsensitive: boolean = false;
  sortedCollection: any[];
  p: number = 1;

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.offStats, 'ppg');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  getPlayerName(id: number): string {
    let playerName = '';
    this.players.forEach((x) => {
      if (x.id == id) {
        playerName = x.name;
      }
    });
    return playerName;
  }

  removeLeading0(numero: any) {
    if (numero > 0) {
      let num = numero;
      let text = num.toString();
      text = text.replace(/^[0]+/, '');
      text = text.slice(0, +4);
      if (text == 0) {
        text = '.000';
      } else if (text == 1) {
        text = '1.000';
      }
      return text;
    } else {
      return '.000';
    }
  }
}
