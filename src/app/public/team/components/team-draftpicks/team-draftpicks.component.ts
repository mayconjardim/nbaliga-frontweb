import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-draftpicks',
  templateUrl: './team-draftpicks.component.html',
  styleUrls: ['./team-draftpicks.component.scss'],
})
export class TeamDraftpicksComponent {
  @Input() team!: Team;
}
