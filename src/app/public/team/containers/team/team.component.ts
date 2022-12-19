import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { Player } from 'src/app/public/player/models/player';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team!: Team;

  constructor(private route: ActivatedRoute, private service: TeamService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((response) => {
      this.team = response;
    });
  }

  findById(): void {}
}
