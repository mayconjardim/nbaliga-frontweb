import { PlayerBasic } from './../../../player/models/player-basic';
import { AfterViewInit, Component, Input } from '@angular/core';

import { Statistics } from './../../models/statistics';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.scss'],
})
export class StatisticsTableComponent {
  @Input() stats!: Statistics[];
  @Input() players!: PlayerBasic[];

  order: string = 'id';
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  sortedCollection: any[];

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.stats, 'id');
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
}
