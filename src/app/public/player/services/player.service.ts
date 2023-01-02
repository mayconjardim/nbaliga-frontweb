import { PlayerBasic } from './../models/player-basic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Player> {
    return this.http.get<Player>(`${API_CONFIG.baseUrl}/players/${id}`);
  }

  findByIdBasic(id: any): Observable<PlayerBasic> {
    return this.http.get<PlayerBasic>(
      `${API_CONFIG.baseUrl}/players/basic/${id}`
    );
  }

  findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${API_CONFIG.baseUrl}/players`);
  }

  findAllBasic(): Observable<PlayerBasic[]> {
    return this.http.get<PlayerBasic[]>(`${API_CONFIG.baseUrl}/players/basic`);
  }

  findAllDraftClass(): Observable<Player[]> {
    return this.http.get<Player[]>(`${API_CONFIG.baseUrl}/players/draftclass`);
  }
}
