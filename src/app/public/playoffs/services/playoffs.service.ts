import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Playoffs } from '../models/playoffs';

@Injectable({
  providedIn: 'root',
})
export class PlayoffsService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Playoffs[]> {
    return this.http.get<Playoffs[]>(`${API_CONFIG.baseUrl}/playoffs`);
  }
}
