import { Component, Input } from '@angular/core';
import { Team } from 'src/app/public/team/models/team';

@Component({
  selector: 'head-to-head-teams',
  templateUrl: './head-to-head-teams.component.html',
  styleUrls: ['./head-to-head-teams.component.scss'],
})
export class HeadToHeadTeamsComponent {
  @Input() teams!: Team[];
  teamLogo = 'assets/images/logos/';
  svg = '.svg';
}
