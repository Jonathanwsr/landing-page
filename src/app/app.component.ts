import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerService } from './services/PlayerService/player.service';
import { LeagueService } from './services/LeagueService/league.service';
import { Player } from './models/PlayerModel/player.model';
import { League } from './models/LeagueModel/league.model';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, NgIf, FormsModule, RouterModule, NgOptimizedImage]
})
export class AppComponent implements OnInit {
  destaquePlayer: Player | null = null;
  destaquePlayers: Player[] = [];
  destaqueLeagues: League[] = [];
  searchQuery: string = '';

  constructor(
    private playerService: PlayerService,
    private leagueService: LeagueService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      if (players.length > 0) {
        this.destaquePlayer = players[Math.floor(Math.random() * players.length)];
        this.destaquePlayers = this.getRandomItems(players, 8);
      }
    });

    this.leagueService.getLeagues().subscribe((leagues: League[]) => {
      this.destaqueLeagues = leagues || [];
    });

    
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.scrollRight();
      }, 5000);
    }
  }

  getRandomItems<T>(items: T[], count: number): T[] {
    return items.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  getLeagueName(leagueId: number | undefined): string {
    if (!leagueId) return 'Desconhecida';
    const league = this.destaqueLeagues.find(l => l.id === leagueId);
    return league ? league.name : 'Desconhecida';
  }

  searchPlayers(): void {
    console.log(`Buscando por: ${this.searchQuery}`);
    this.playerService.getPlayerById;
    this.playerService.getPlayerByName;
  }

  login(): void {
    console.log("Redirecionando para login...");
  }

  viewPlayerDetails(playerName: string): void {
    console.log(`Exibindo detalhes para: ${playerName}`);
  }

  scrollLeft(): void {
    if (isPlatformBrowser(this.platformId)) {
      const carousel = document.querySelector('.carousel');
      if (carousel) {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
      }
    }
  }

  scrollRight(): void {
    if (isPlatformBrowser(this.platformId)) {
      const carousel = document.querySelector('.carousel');
      if (carousel) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }
  }
}
