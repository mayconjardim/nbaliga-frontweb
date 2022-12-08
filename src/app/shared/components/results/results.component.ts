import { Results } from './../../models/results';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsService } from '../../services/results.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'results',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  results: Results[] = [];
  imgLogo = 'assets/images/logos/';

  constructor(private service: ResultsService) {}

  ngOnInit(): void {
    this.service
      .read()
      .subscribe((results: Results[]) => (this.results = results));
  }
}
