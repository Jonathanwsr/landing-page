import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'services/LeagueService/league.service';
import { League } from 'models/LeagueModel/league.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  leagues: League[] = [];

  constructor(private leagueService: LeagueService) {}

  ngOnInit() {
    this.leagueService.getLeagues().subscribe(data => this.leagues = data);
  }
}