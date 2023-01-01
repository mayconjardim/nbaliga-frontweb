import { Component, OnInit } from '@angular/core';
import { Playoffs } from '../../models/playoffs';
import { PlayoffsService } from '../../services/playoffs.service';

@Component({
  selector: 'playoffs',
  templateUrl: './playoffs.component.html',
  styleUrls: ['./playoffs.component.scss'],
})
export class PlayoffsComponent implements OnInit {
  playoffs!: Playoffs[];

  constructor(private service: PlayoffsService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.playoffs = response;
    });
  }
}
