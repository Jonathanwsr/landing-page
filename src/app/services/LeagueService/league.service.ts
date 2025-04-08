import { Injectable } from '@angular/core';
import { League } from 'models/LeagueModel/league.model';
import { Observable, of } from 'rxjs';


export interface Player {
  name: string;
  height: number;
  pastTeams: string[];
  currentTeam: string;
  titlesPerClub: { [club: string]: number };
  league: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private leagues: League[] = [
    { id: 0, name: 'Aposentados', teams: ['Jogadores Aposentados'], totalTeams: 1, points: {}, Divisions: ['Nenhuma'], Regulatorybody: ['Nenhum'], Awards: [], Countries: 'Global' , photo: "/assets/trophies/chuteira.png" },
    { id: 1, name: 'Premier League', teams: ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Manchester City', 'Tottenham'], totalTeams: 20, points: { 'Manchester United': 55, 'Chelsea': 50 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['The FA'], Awards: [38, 19, 14, 10], Countries: 'Inglaterra', photo: "/assets/trophies/premier_league.jpg" },
    { id: 2, name: 'La Liga', teams: ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Valencia'], totalTeams: 20, points: { 'Real Madrid': 60, 'Barcelona': 58 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['RFEF'], Awards: [35, 27, 11], Countries: 'Espanha' , photo: "/assets/trophies/taça_la-liga.jpg" },
    { id: 3, name: 'Bundesliga', teams: ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen', 'Schalke 04'], totalTeams: 18, points: { 'Bayern Munich': 65, 'Borussia Dortmund': 58 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['DFL'], Awards: [31, 8, 5], Countries: 'Alemanha' , photo: "/assets/trophies/taça_budesliga.jpeg" },
    { id: 4, name: 'Serie A', teams: ['Juventus', 'AC Milan', 'Inter de Milão', 'Roma', 'Napoli'], totalTeams: 20, points: { 'Juventus': 70, 'AC Milan': 65 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['FIGC'], Awards: [36, 19, 18], Countries: 'Itália' , photo: "/assets/trophies/taça_serie-a.jpg"},
    { id: 5, name: 'Ligue 1', teams: ['PSG', 'Olympique de Marseille', 'Lyon', 'Monaco', 'Lille'], totalTeams: 20, points: { 'PSG': 68, 'Olympique de Marseille': 60 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['FFF'], Awards: [10, 9, 7], Countries: 'França' , photo: "/assets/trophies/taça_liga-1.jpg" },
    { id: 6, name: 'Brasileirão', teams: ['Flamengo', 'Palmeiras', 'São Paulo', 'Corinthians', 'Grêmio'], totalTeams: 20, points: { 'Flamengo': 75, 'Palmeiras': 70 }, Divisions: ['Série A'], Regulatorybody: ['CBF'], Awards: [10, 9, 8], Countries: 'Brasil' , photo: "/assets/trophies/taca_brasileiro.png" },
    { id: 7, name: 'MLS', teams: ['Inter Miami', 'LA Galaxy', 'New York City FC', 'Seattle Sounders', 'Atlanta United'], totalTeams: 29, points: { 'Inter Miami': 40 }, Divisions: ['Conferência Leste', 'Conferência Oeste'], Regulatorybody: ['MLS'], Awards: [5, 4, 3], Countries: 'Estados Unidos' , photo: "/assets/trophies/taça_mls.jpeg" },
    { id: 8, name: 'Liga MX', teams: ['América', 'Guadalajara', 'Cruz Azul', 'Monterrey', 'Pumas'], totalTeams: 18, points: { 'América': 68, 'Guadalajara': 60 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['FMF'], Awards: [13, 12, 9], Countries: 'México', photo: "/assets/trophies/taça_liga-mx.jpg" },
    { id: 9, name: 'Superliga Argentina', teams: ['Boca Juniors', 'River Plate', 'Independiente', 'Racing Club', 'San Lorenzo'], totalTeams: 26, points: { 'Boca Juniors': 75, 'River Plate': 73 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['AFA'], Awards: [34, 36, 18], Countries: 'Argentina' , photo: "/assets/trophies/taça_champions.png" },
    { id: 10, name: 'Primera División Uruguaia', teams: ['Nacional', 'Peñarol', 'Defensor Sporting', 'Danubio', 'Liverpool FC'], totalTeams: 16, points: { 'Nacional': 70, 'Peñarol': 68 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['AUF'], Awards: [48, 47, 10], Countries: 'Uruguai' , photo: "/assets/trophies/taca_liga-uruguai.png" },
    { id: 11, name: 'Primera División Peruana', teams: ['Alianza Lima', 'Universitario', 'Sporting Cristal', 'Cienciano', 'Melgar'], totalTeams: 18, points: { 'Alianza Lima': 55, 'Universitario': 53 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['FPF'], Awards: [25, 27, 19], Countries: 'Peru' , photo: "/assets/trophies/taça_liga-peruana.png"},
    { id: 12, name: 'Primera División Chilena', teams: ['Colo-Colo', 'Universidad de Chile', 'Universidad Católica', 'Palestino', 'O’Higgins'], totalTeams: 16, points: { 'Colo-Colo': 72, 'Universidad de Chile': 65 }, Divisions: ['Primeira Divisão'], Regulatorybody: ['ANFP'], Awards: [32, 18, 16], Countries: 'Chile'  , photo: "/assets/trophies/taça_liga-chilena.jpg"},
    { id: 13, name: 'Saudi Pro League',teams: ['Al-Nassr', 'Al-Hilal', 'Al-Ittihad', 'Al-Ahli', 'Al-Shabab', 'Al-Taawoun','Al-Fateh', 'Damac', 'Al-Fayha', 'Ettifaq', 'Al-Khaleej', 'Al-Riyadh',     'Al-Okhdood', 'Al-Tai', 'Al-Raed', 'Abha', 'Wehda', 'Al-Hazem'], totalTeams: 18,
      points: {
        'Al-Hilal': 77,
        'Al-Nassr': 65,
        'Al-Ahli': 52,
        'Al-Taawoun': 51,
        'Al-Ittihad': 50,
        'Damac': 38,
        'Al-Fateh': 38,
        'Ettifaq': 36,
        'Al-Fayha': 35,
        'Al-Shabab': 35,
        'Al-Khaleej': 34,
        'Al-Riyadh': 31,
        'Al-Okhdood': 27,
        'Al-Tai': 26,
        'Al-Raed': 24,
        'Abha': 22,
        'Wehda': 21,
        'Al-Hazem': 19
      },
      Divisions: ['Saudi Pro League'],
      Regulatorybody: ['Saudi Pro League'],
      Awards: [1, 2, 3],
      Countries: 'Arábia Saudita',
      photo: '/assets/trophies/taça_liga-saudita.jpg' 
    },

    {
      id: 14,
      name: 'Liga Colombiana',
      teams: [
        'Atlético Nacional', 'Millonarios', 'América de Cali', 'Deportivo Cali',
        'Independiente Santa Fe', 'Junior FC', 'Once Caldas', 'Deportes Tolima',
        'Independiente Medellín', 'La Equidad', 'Boyacá Chicó', 'Deportivo Pasto',
        'Envigado FC', 'Jaguares de Córdoba', 'Patriotas Boyacá', 'Unión Magdalena',
        'Alianza Petrolera', 'Fortaleza CEIF', 'Deportivo Pereira', 'Águilas Doradas'
      ],
      totalTeams: 20,
      points: {
        'Atlético Nacional': 45,
        'Millonarios': 42,
        'América de Cali': 40,
        'Deportivo Cali': 38,
        'Independiente Santa Fe': 36,
        'Junior FC': 35,
        'Once Caldas': 33,
        'Deportes Tolima': 32,
        'Independiente Medellín': 31,
        'La Equidad': 30,
        'Boyacá Chicó': 29,
        'Deportivo Pasto': 28,
        'Envigado FC': 27,
        'Jaguares de Córdoba': 26,
        'Patriotas Boyacá': 25,
        'Unión Magdalena': 24,
        'Alianza Petrolera': 23,
        'Fortaleza CEIF': 22,
        'Deportivo Pereira': 21,
        'Águilas Doradas': 20
      },
      Divisions: ['Primeira Divisão'],
      Regulatorybody: ['DIMAYOR'],
      Awards: [1, 2, 3],
      Countries: 'Colômbia',
      photo: '/assets/trophies/taça_liga-colombiana.jpg'
    },


  ];
  
  

  getLeagues(): Observable<League[]> {
    return of(this.leagues);
  }

  getLeagueById(id: number): Observable<League | undefined> {
    return of(this.leagues.find(l => l.id === id));
  }
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [
    {
      name: 'Cristiano Ronaldo',
      height: 1.87,
      pastTeams: ['Sporting CP', 'Manchester United', 'Real Madrid', 'Juventus'],
      currentTeam: 'Al-Nassr',
      titlesPerClub: { 'Manchester United': 10, 'Real Madrid': 16, 'Juventus': 5 },
      league: 'Saudi Pro League',
      image: 'assets/images/cristiano_ronaldo.jpg',
    },
    {
      name: 'Zlatan Ibrahimović',
      height: 1.95,
      pastTeams: ['Malmo FF', 'Ajax', 'Juventus', 'Inter Milan', 'Barcelona', 'AC Milan', 'PSG', 'Manchester United', 'LA Galaxy'],
      currentTeam: 'Aposentado',
      titlesPerClub: { 'Ajax': 3, 'Juventus': 2, 'Inter Milan': 3, 'Barcelona': 5, 'AC Milan': 2, 'PSG': 12 },
      league: 'Aposentados',
      image: 'assets/images/ibraimovic.jpg',
    },
    {
      name: 'Robert Lewandowski',
      height: 1.85,
      pastTeams: ['Lech Poznań', 'Borussia Dortmund', 'Bayern Munich'],
      currentTeam: 'Barcelona',
      titlesPerClub: { 'Borussia Dortmund': 4, 'Bayern Munich': 19 },
      league: 'La Liga',
      image: 'assets/images/lewandowski.jpg',
    },
    {
      name: 'Luka Modric',
      height: 1.72,
      pastTeams: ['Dinamo Zagreb', 'Tottenham Hotspur'],
      currentTeam: 'Real Madrid',
      titlesPerClub: { 'Real Madrid': 23 },
      league: 'La Liga',
      image: 'assets/images/luka_modric.jpg',
    },
    {
      name: 'Lionel Messi',
      height: 1.70,
      pastTeams: ['Barcelona', 'PSG'],
      currentTeam: 'Inter Miami',
      titlesPerClub: { 'Barcelona': 35, 'PSG': 3 },
      league: 'MLS',
      image: 'assets/images/messi.jpg',
    },
    {
      name: 'Neymar',
      height: 1.75,
      pastTeams: ['Santos', 'Barcelona', 'PSG'],
      currentTeam: 'Al-Hilal',
      titlesPerClub: { 'Santos': 6, 'Barcelona': 9, 'PSG': 14 },
      league: 'Saudi Pro League',
      image: 'assets/images/neymar.jpg',
    },
    {
      name: 'Romário',
      height: 1.67,
      pastTeams: ['Vasco da Gama', 'PSV', 'Barcelona', 'Flamengo'],
      currentTeam: 'Aposentado',
      titlesPerClub: { 'PSV': 3, 'Barcelona': 2, 'Flamengo': 5 },
      league: 'Aposentados',
      image: 'assets/images/romario.jpg',
    }
  ];

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getPlayerByName(name: string): Observable<Player | undefined> {
    return of(this.players.find(p => p.name.toLowerCase() === name.toLowerCase()));
  }
}
