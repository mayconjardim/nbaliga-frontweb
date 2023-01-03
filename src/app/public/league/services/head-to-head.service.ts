import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

import { HeadToHead } from './../models/head-to-head';

@Injectable({
  providedIn: 'root',
})
export class HeadToHeadService {
  constructor(private http: HttpClient) {}

  findByTeam(id: any): Observable<HeadToHead[]> {
    return this.http.get<HeadToHead[]>(
      `${API_CONFIG.baseUrl}/headtohead/${id}`
    );
  }
}
