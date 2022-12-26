import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Schedule } from './../models/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  findByTeam(team: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${API_CONFIG.baseUrl}/schedule/${team}`);
  }

  findAll(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${API_CONFIG.baseUrl}/schedule`);
  }
}
