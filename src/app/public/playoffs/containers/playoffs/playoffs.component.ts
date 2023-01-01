import { Component, OnInit } from '@angular/core';
import { Playoffs } from '../../models/playoffs';

@Component({
  selector: 'playoffs',
  templateUrl: './playoffs.component.html',
  styleUrls: ['./playoffs.component.scss'],
})
export class PlayoffsComponent implements OnInit {
  playoffs!: Playoffs[];

  ngOnInit(): void {}
}
