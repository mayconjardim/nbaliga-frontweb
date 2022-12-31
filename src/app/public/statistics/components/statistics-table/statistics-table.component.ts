import { Component, Input } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

import { PlayerBasic } from './../../../player/models/player-basic';
import { Statistics } from './../../models/statistics';

@Component({
  selector: 'statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.scss'],
})
export class StatisticsTableComponent {
  @Input() stats!: Statistics[];
  @Input() players!: PlayerBasic[];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  order: string = 'ppg';
  reverse: boolean = true;
  caseInsensitive: boolean = false;
  sortedCollection: any[];
  p: number = 1;

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.stats, 'ppg');
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
