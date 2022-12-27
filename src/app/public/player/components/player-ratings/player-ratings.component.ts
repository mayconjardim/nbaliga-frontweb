import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'player-ratings',
  templateUrl: './player-ratings.component.html',
  styleUrls: ['./player-ratings.component.scss'],
})
export class PlayerRatingsComponent {
  @Input() player!: Player;

  getRatingColor(rating: number) {
    if (rating <= 39) {
      return 'red';
    } else if (rating >= 40 && rating <= 49) {
      return 'orange';
    } else if (rating >= 50 && rating <= 59) {
      return 'yellow';
    } else if (rating >= 60 && rating <= 79) {
      return 'green';
    } else if (rating >= 80 && rating <= 99) {
      return 'blue';
    } else {
      return 'purple';
    }
  }

  styleObject(rating: any) {
    return { width: rating + '%', background: this.getRatingColor(rating) };
  }
}
