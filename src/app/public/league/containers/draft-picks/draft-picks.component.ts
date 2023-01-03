import { Draftpicks } from './../../models/draftpicks';
import { DraftPickService } from './../../services/draft-pick.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'draft-picks',
  templateUrl: './draft-picks.component.html',
  styleUrls: ['./draft-picks.component.scss'],
})
export class DraftPicksComponent implements OnInit {
  picks!: Draftpicks[];

  constructor(private service: DraftPickService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.picks = response;
    });
  }
}
