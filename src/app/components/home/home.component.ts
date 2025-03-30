import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PlayerService } from 'services/PlayerService/player.service';
import { LeagueService } from 'services/LeagueService/league.service';
import { Player } from 'models/PlayerModel/player.model';
import { League } from 'models/LeagueModel/league.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicionado RouterModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService, LeagueService]
})
export class HomeComponent implements OnInit {
  players: Player[] = [];
  leagues: League[] = [];

  constructor(
    private playerService: PlayerService, 
    private leagueService: LeagueService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues);
  }

  openPlayerDetails(playerId: number): void {
    this.router.navigate(['/player', playerId]);
  }

  openLeagueDetails(leagueId: number): void {
    this.router.navigate(['/leagues', leagueId]); // Corrigido o caminho da rota
  }
}
