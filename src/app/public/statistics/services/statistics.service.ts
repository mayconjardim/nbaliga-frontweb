import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Statistics } from '../models/statistics';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  findBySeason(season: any): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(
      `${API_CONFIG.baseUrl}/stats/season/${season}`
    );
  }
}
