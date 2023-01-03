import { Draftpicks } from './../models/draftpicks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class DraftPickService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Draftpicks[]> {
    return this.http.get<Draftpicks[]>(`${API_CONFIG.baseUrl}/picks`);
  }
}
