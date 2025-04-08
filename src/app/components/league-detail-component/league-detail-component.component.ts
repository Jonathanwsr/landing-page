import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeagueService } from 'services/LeagueService/league.service';
import { League } from 'models/LeagueModel/league.model';

@Component({
  selector: 'app-league-detail-component',
  templateUrl: './league-detail-component.component.html',
  styleUrls: ['./league-detail-component.component.css'],
  standalone: true,
  imports: [CommonModule]
})


export class LeagueDetailComponent implements OnInit {
  league?: League;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.leagueService.getLeagueById(id).subscribe(league => {
        this.league = league;
      });
    }
  }
}
