import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/public/team/models/team';
import { TeamService } from 'src/app/public/team/services/team.service';

@Component({
  selector: 'salary-cap',
  templateUrl: './salary-cap.component.html',
  styleUrls: ['./salary-cap.component.scss'],
})
export class SalaryCapComponent implements OnInit {
  teams!: Team[];

  constructor(private service: TeamService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.teams = response;
    });
  }
}
