import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Champs } from '../../models/champs';
import { ChampsService } from '../../services/champs.service';

@Component({
  selector: 'results',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  champs: Champs[] = [];
  imgLogo = 'assets/images/logos/';

  constructor(private service: ChampsService) {}

  ngOnInit(): void {
    this.service.read().subscribe((champs: Champs[]) => (this.champs = champs));
  }
}
