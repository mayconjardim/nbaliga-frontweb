import { Schedule } from './../../../schedule/models/schedule';
import { ScheduleService } from './../../../schedule/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team!: Team;
  schedule!: Schedule[];

  constructor(
    private route: ActivatedRoute,
    private service: TeamService,
    private ScheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((response) => {
      this.team = response;
    });
    this.teamSchedule();
  }

  teamSchedule() {
    this.ScheduleService.findByTeam(this.team.name).subscribe((response) => {
      this.schedule = response;
    });
  }
}
