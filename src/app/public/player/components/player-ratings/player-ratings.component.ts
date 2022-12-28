import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'player-ratings',
  templateUrl: './player-ratings.component.html',
  styleUrls: ['./player-ratings.component.scss'],
})
export class PlayerRatingsComponent {
  @Input() player!: Player;
}
