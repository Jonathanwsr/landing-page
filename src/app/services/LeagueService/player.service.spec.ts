import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerService } from '../PlayerService/player.service';

@Injectable({
  providedIn: 'root'
})
export class Player {

  private apiUrl = 'https://localhost.com/players';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/${id}`);
  }
}
