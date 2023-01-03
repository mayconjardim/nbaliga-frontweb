import { TeamService } from 'src/app/public/team/services/team.service';
import { ActivatedRoute } from '@angular/router';
import { HeadToHead } from '../../models/head-to-head';
import { HeadToHeadService } from './../../services/head-to-head.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/public/team/models/team';

@Component({
  selector: 'head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.scss'],
})
export class HeadToHeadComponent implements OnInit {
  h2h!: HeadToHead[];
  teams!: Team[];

  constructor(
    private service: HeadToHeadService,
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findByTeam();
    this.findAllteams();
  }

  findByTeam() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findByTeam(id).subscribe((response) => {
      this.h2h = response;
    });
  }

  findAllteams() {
    this.teamService.findAll().subscribe((response) => {
      this.teams = response;
    });
  }
}
