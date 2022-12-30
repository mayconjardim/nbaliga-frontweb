import { SeasonInfo } from './../models/seasonInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class SeasonInfoService {
  constructor(private http: HttpClient) {}

  getSeason(): Observable<SeasonInfo[]> {
    return this.http.get<SeasonInfo[]>(`${API_CONFIG.baseUrl}/seasoninfo`);
  }
}
