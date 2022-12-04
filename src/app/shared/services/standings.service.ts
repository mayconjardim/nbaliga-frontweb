import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Standings } from './../models/standings';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private standings: Standings[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.standings.length) {
      return of(this.standings);
    }

    return this.http.get<Standings[]>(`${API_CONFIG.baseUrl}/standings`).pipe(
      tap((standings) => {
        this.standings = standings;
      })
    );
  }
}
