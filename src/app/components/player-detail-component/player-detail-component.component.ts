import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'services/PlayerService/player.service';
import { LeagueService } from 'services/LeagueService/league.service';
import { Player } from 'models/PlayerModel/player.model';
import { League } from 'models/LeagueModel/league.model';

@Component({
  selector: 'app-player-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-detail-component.component.html',
  styleUrls: ['./player-detail-component.component.css'],
  providers: [PlayerService, LeagueService]
})
export class PlayerDetailComponent implements OnInit {
  player: Player = {} as Player;
  leagueName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private leagueService: LeagueService
  ) {}

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(playerId)) {
      this.playerService.getPlayerById(playerId).subscribe((player: Player | undefined) => {
        this.player = player || {} as Player;
        if (player) {
          this.getLeagueName(player.leagueId);
        }
      });
    }
  }

  getLeagueName(leagueId: number): void {
    this.leagueService.getLeagueById(leagueId).subscribe(league => {
      this.leagueName = league ? league.name : 'sem liga';
    });
  }

  getClubNames(player: Player): string[] {
    return Object.keys(player.titlesPerClub || {});
  }

  goToPlayers() {
    this.router.navigate(['/players']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
