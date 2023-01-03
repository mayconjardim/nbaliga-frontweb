import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draftpicks } from '../models/draftpicks';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadToHeadService {
  constructor(private http: HttpClient) {}

  findByTeam(id: any): Observable<Draftpicks[]> {
    return this.http.get<Draftpicks[]>(
      `${API_CONFIG.baseUrl}/headtohead/${id}`
    );
  }
}
