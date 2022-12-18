import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Team> {
    return this.http.get<Team>(`${API_CONFIG.baseUrl}/teams/${id}`);
  }

  findAll(): Observable<Team[]> {
    return this.http.get<Team[]>(`${API_CONFIG.baseUrl}/teams`);
  }
}
