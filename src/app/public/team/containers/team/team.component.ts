import { PlayerService } from './../../../player/services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Schedule } from '../../../league/models/schedule';
import { ScheduleService } from '../../../league/services/schedule.service';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { PlayerBasic } from './../../../player/models/player-basic';

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
  ) {
    this.route.paramMap.subscribe(() => {
      this.getTeam();
    });
  }

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
