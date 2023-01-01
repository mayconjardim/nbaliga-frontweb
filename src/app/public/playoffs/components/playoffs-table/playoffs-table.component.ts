import { Component, Input, OnInit } from '@angular/core';
import { Playoffs } from '../../models/playoffs';

@Component({
  selector: 'playoffs-table',
  templateUrl: './playoffs-table.component.html',
  styleUrls: ['./playoffs-table.component.scss'],
})
export class PlayoffsTableComponent implements OnInit {
  @Input() playoffs!: Playoffs[];
  firstRound: Playoffs[] = [];
  secondRound: Playoffs[] = [];
  conferenceFinals: Playoffs[] = [];
  finals: Playoffs[] = [];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  ngOnInit(): void {
    this.getRound();
  }

  getRound() {
    this.playoffs.forEach((x) => {
      if (x.seriesId <= 8) {
        this.firstRound.push(x);
      } else if (x.seriesId <= 12) {
        this.secondRound.push(x);
      } else if (x.seriesId <= 14) {
        this.conferenceFinals.push(x);
      } else {
        this.finals.push(x);
      }
    });
  }
}
