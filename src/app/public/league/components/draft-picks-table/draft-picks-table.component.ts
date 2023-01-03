import { Component, Input } from '@angular/core';
import { Draftpicks } from '../../models/draftpicks';

@Component({
  selector: 'draft-picks-table',
  templateUrl: './draft-picks-table.component.html',
  styleUrls: ['./draft-picks-table.component.scss'],
})
export class DraftPicksTableComponent {
  @Input() picks!: Draftpicks[];
  teamLogo = 'assets/images/logos/';
  svg = '.svg';
}
