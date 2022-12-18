import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss'],
})
export class TeamHeaderComponent {
  @Input() team!: Team;
  teamLogo = 'assets/images/logos/';
  svg = '.svg';
}
