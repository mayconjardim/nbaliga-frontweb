import { Schedule } from './../../../schedule/models/schedule';
import { ScheduleService } from './../../../schedule/services/schedule.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  teams!: Team[];
  schedule!: Schedule[];

  constructor(
    private route: ActivatedRoute,
    private service: TeamService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.getTeam();
    this.findAll();
  }

  getTeam() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((response) => {
      this.team = response;
      this.getTeamSchedule();
    });
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.teams = response;
    });
  }

  getTeamSchedule() {
    if (this.team.name != null) {
      this.scheduleService.findByTeam(this.team.name).subscribe((response) => {
        this.schedule = response;
      });
    }
  }
}
