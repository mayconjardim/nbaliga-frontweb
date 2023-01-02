import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Statistics } from 'src/app/public/statistics/models/statistics';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  player!: Player;
  playerSeasonStats!: Statistics;

  constructor(private route: ActivatedRoute, private service: PlayerService) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((response) => {
      this.player = response;
      this.getSeasonStats();
    });
  }

  getSeasonStats() {
    if (this.player.seasonStats && this.player.seasonStats.length > 0) {
      let lastObj = this.player.seasonStats[this.player.seasonStats.length - 1];

      this.playerSeasonStats = { ...lastObj };
    }
  }
}
