import { Component, Input } from '@angular/core';
import { Playoffs } from '../../models/playoffs';

@Component({
  selector: 'playoffs-table',
  templateUrl: './playoffs-table.component.html',
  styleUrls: ['./playoffs-table.component.scss'],
})
export class PlayoffsTableComponent {
  @Input() playoffs!: Playoffs[];
}
