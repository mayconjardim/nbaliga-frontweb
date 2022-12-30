import { Component, OnInit } from '@angular/core';

import { Statistics } from './../../models/statistics';
import { StatisticsService } from './../../services/statistics.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  stats!: Statistics[];
  season!: any;
  number: any = localStorage.getItem('season');
  constructor(private statsService: StatisticsService) {}

  ngOnInit(): void {
    this.findBySeason();
    console.log(this.stats);
  }

  findBySeason() {
    this.statsService.findBySeason(this.number).subscribe((response) => {
      if (response.length > 0) {
        this.stats = response;
      } else {
        const number1 = this.number - 1;
        this.statsService.findBySeason(number1).subscribe((response) => {
          this.stats = response;
        });
      }
    });
  }
}
