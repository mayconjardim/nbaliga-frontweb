import { PlayoffsService } from './../../services/playoffs.service';
import { Component } from '@angular/core';
import { PlayoffStats } from '../../models/playoffStats';
import { PlayerBasic } from 'src/app/public/player/models/player-basic';
import { PlayerService } from 'src/app/public/player/services/player.service';

@Component({
  selector: 'playoffs-stats',
  templateUrl: './playoffs-stats.component.html',
  styleUrls: ['./playoffs-stats.component.scss'],
})
export class PlayoffsStatsComponent {
  offStats!: PlayoffStats[];
  players!: PlayerBasic[];
  season!: any;
  number: any = localStorage.getItem('season');
  constructor(
    private service: PlayoffsService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.StatsBySeason();
    this.getPlayerBasic();
  }

  StatsBySeason() {
    this.service.findBySeason(this.number).subscribe((response) => {
      if (response.length > 0) {
        this.offStats = response;
      } else {
        const number1 = this.number - 1;
        this.service.findBySeason(number1).subscribe((response) => {
          this.offStats = response;
        });
      }
    });
  }

  getPlayerBasic() {
    this.playerService.findAllBasic().subscribe((response) => {
      this.players = response;
    });
  }
}
