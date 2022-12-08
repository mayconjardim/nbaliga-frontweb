import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Results } from '../models/results';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private results: Results[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.results.length) {
      return of(this.results);
    }

    return this.http
      .get<Results[]>(`${API_CONFIG.baseUrl}/schedule/results?size=6`)
      .pipe(
        tap((results) => {
          this.results = results;
          console.log(results);
        })
      );
  }
}
