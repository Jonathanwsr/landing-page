import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'services/PlayerService/player.service';
import { Player } from 'models/PlayerModel/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [CommonModule]
})


export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => this.players = data);
  }
}
