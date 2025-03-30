import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'services/PlayerService/player.service';
import { LeagueService } from 'services/LeagueService/league.service';
import { Player } from 'models/PlayerModel/player.model';
import { League } from 'models/LeagueModel/league.model';

@Component({
  selector: 'app-player-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayerDetailComponent implements OnInit {
[x: string]: any;
  player: Player | undefined;
  leagueName: string | undefined | any;; 


  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private leagueService: LeagueService
  ) {}

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(playerId)) {
      this.playerService.getPlayerById(playerId).subscribe((player: Player | undefined) => {
        this.player = player;
        if (player) {
          this.getLeagueName(player.leagueId); 
        }
      });
    }
  }
  
  getLeagueName(leagueId: number): void {
    this.leagueService.getLeagueById(leagueId).subscribe(league => {
      this.leagueName = league ? league.name : 'Desconhecida';
    });
  }

  
  getClubNames(player: Player): string[] {
    return Object.keys(player.titlesPerClub);
  }
}
