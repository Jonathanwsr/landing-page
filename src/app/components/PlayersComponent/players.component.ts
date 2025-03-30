import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'services/PlayerService/player.service';
import { Player } from 'models/PlayerModel/player.model';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => this.players = data);
  }
}
