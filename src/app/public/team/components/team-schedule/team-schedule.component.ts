import { Schedule } from './../../../schedule/models/schedule';
import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-schedule',
  templateUrl: './team-schedule.component.html',
  styleUrls: ['./team-schedule.component.scss'],
})
export class TeamScheduleComponent {
  @Input() team!: Team;
  @Input() schedule!: Schedule[];

  teamLogo = 'assets/images/logos/';
  svg = '.svg';
}
