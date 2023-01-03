import { Component, Input } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { Team } from 'src/app/public/team/models/team';

@Component({
  selector: 'salary-cap-table',
  templateUrl: './salary-cap-table.component.html',
  styleUrls: ['./salary-cap-table.component.scss'],
})
export class SalaryCapTableComponent {
  @Input() teams!: Team[];
  teamLogo = 'assets/images/logos/';
  svg = '.svg';

  order: string = 'totalSalary';
  reverse: boolean = true;
  caseInsensitive: boolean = false;
  sortedCollection: any[];
  p: number = 1;

  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.teams, 'totalSalary');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
