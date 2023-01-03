import { Component } from '@angular/core';
import { Player } from 'src/app/public/player/models/player';
import { PlayerService } from 'src/app/public/player/services/player.service';

@Component({
  selector: 'draft-class',
  templateUrl: './draft-class.component.html',
  styleUrls: ['./draft-class.component.scss'],
})
export class DraftClassComponent {
  players!: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getDraftClass();
  }

  getDraftClass() {
    this.playerService.findAllDraftClass().subscribe((response) => {
      this.players = response;
    });
  }
}
