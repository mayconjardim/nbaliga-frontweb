import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-contracts',
  templateUrl: './team-contracts.component.html',
  styleUrls: ['./team-contracts.component.scss'],
})
export class TeamContractsComponent {
  @Input() team!: Team;
}
