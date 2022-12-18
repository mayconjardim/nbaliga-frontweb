import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { Champs } from '../models/champs';

@Injectable({
  providedIn: 'root',
})
export class ChampsService {
  private champs: Champs[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.champs.length) {
      return of(this.champs);
    }

    return this.http.get<Champs[]>(`${API_CONFIG.baseUrl}/champs`).pipe(
      tap((champs) => {
        this.champs = champs;
      })
    );
  }
}
