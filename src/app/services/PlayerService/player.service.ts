import { Injectable } from '@angular/core';
import { Player } from 'models/PlayerModel/player.model';
import { Observable, of } from 'rxjs';
import { LeagueService } from '../LeagueService/league.service';
import { League } from '../../models/LeagueModel/league.model';


@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Cristiano Ronaldo',
      position: 'Atacante',
      height: 1.87,
      pastTeams: ['Sporting CP', 'Manchester United', 'Real Madrid', 'Juventus'],
      currentTeam: 'Al-Nassr',
      titlesPerClub: { 'Manchester United': 10, 'Real Madrid': 16, 'Juventus': 5 },
      leagueId: 13, 
      photo: '/assets/images/cristiano_ronaldo.jpg',
      physicalConditioning: {
        resistance: 90,
        speed: 87,
        strength: 85,
        agility: 88,
        flexibility: 80
      },
      heightInCm: 187,
      weightInKg: 83,
      health: 'Excelente',
      technicalSkills: {
        ballControl: 94,
        passing: 85,
        shooting: 95,
        dribbling: 89,
        marking: 40
      },
      tacticalSkills: {
        positioning: 95,
        gameVision: 90,
        tacticalIntelligence: 88,
        teamwork: 85
      },
      mentalAttributes: {
        concentration: 95,
        resilience: 94,
        discipline: 92,
        leadership: 90
      },
      experience: 99,
      age: 39,
      nationality: 'Portugal',
      injuryHistory: 'Lesões leves no joelho e tornozelo',
      reputation: 'Ícone mundial'
    },
    {
      id: 2,
      name: 'Zlatan Ibrahimović',
      position: 'Atacante',
      height: 1.95,
      pastTeams: ['Malmo FF', 'Ajax', 'Juventus', 'Inter Milan', 'Barcelona', 'AC Milan', 'PSG', 'Manchester United', 'LA Galaxy'],
      currentTeam: 'Aposentado',
      titlesPerClub: { 'Ajax': 3, 'Juventus': 2, 'Inter Milan': 3, 'Barcelona': 5, 'AC Milan': 2, 'PSG': 12 },
      leagueId: 0, 
      photo: '/assets/images/ibraimovic.jpg',
      physicalConditioning: {
        resistance: 85,
        speed: 78,
        strength: 90,
        agility: 82,
        flexibility: 75
      },
      heightInCm: 195,
      weightInKg: 95,
      health: 'Boa',
      technicalSkills: {
        ballControl: 93,
        passing: 84,
        shooting: 94,
        dribbling: 86,
        marking: 30
      },
      tacticalSkills: {
        positioning: 92,
        gameVision: 88,
        tacticalIntelligence: 85,
        teamwork: 80
      },
      mentalAttributes: {
        concentration: 90,
        resilience: 95,
        discipline: 85,
        leadership: 92
      },
      experience: 98,
      age: 42,
      nationality: 'Suécia',
      injuryHistory: 'Lesões no joelho',
      reputation: 'Lenda'
    },
 
    {
      id: 3,
      name: 'Andrea Pirlo',
      position: 'Meio-campista',
      height: 1.77,
      pastTeams: ['Brescia', 'Inter Milan', 'AC Milan', 'Juventus', 'New York City'],
      currentTeam: 'Aposentado',
      titlesPerClub: { 'AC Milan': 8, 'Juventus': 7 },
      leagueId: 0,
      photo: 'assets/images/pirlo.jpg',
      physicalConditioning: {
        resistance: 80,
        speed: 70,
        strength: 75,
        agility: 78,
        flexibility: 80
      },
      heightInCm: 177,
      weightInKg: 68,
      health: 'Ótima',
      technicalSkills: {
        ballControl: 95,
        passing: 98,
        shooting: 85,
        dribbling: 80,
        marking: 70
      },
      tacticalSkills: {
        positioning: 90,
        gameVision: 99,
        tacticalIntelligence: 98,
        teamwork: 95
      },
      mentalAttributes: {
        concentration: 95,
        resilience: 88,
        discipline: 94,
        leadership: 90
      },
      experience: 97,
      age: 44,
      nationality: 'Itália',
      injuryHistory: 'Poucas lesões graves',
      reputation: 'Lenda'
    },


    {
      id: 4,
      name: 'Zinedine Zidane',
      position: 'Meio-campista',
      height: 1.85,
      pastTeams: ['Cannes', 'Bordeaux', 'Juventus', 'Real Madri'],
      currentTeam: 'Aposentado',
      titlesPerClub: { 'AC Milan': 8, 'Juventus': 7 },
      leagueId: 0,
      photo: 'assets/images/zidane.jpg',
      physicalConditioning: {
        resistance: 80,
        speed: 70,
        strength: 75,
        agility: 78,
        flexibility: 80
      },
      heightInCm: 177,
      weightInKg: 68,
      health: 'Ótima',
      technicalSkills: {
        ballControl: 95,
        passing: 98,
        shooting: 85,
        dribbling: 80,
        marking: 70
      },
      tacticalSkills: {
        positioning: 90,
        gameVision: 99,
        tacticalIntelligence: 98,
        teamwork: 95
      },
      mentalAttributes: {
        concentration: 95,
        resilience: 88,
        discipline: 94,
        leadership: 90
      },
      experience: 97,
      age: 44,
      nationality: 'Itália',
      injuryHistory: 'Poucas lesões graves',
      reputation: 'Lenda'
    },

    {
      "id": 5,
      "name": "Lionel Messi",
      "position": "Atacante",
      "height": 1.70,
      "pastTeams": ["Barcelona", "Paris Saint-Germain"],
      "currentTeam": "Inter Miami",
      "titlesPerClub": { "Barcelona": 35, "Paris Saint-Germain": 3 },
      "leagueId": 1,
      "photo": "/assets/images/messi.jpg",
      "physicalConditioning": {
        "resistance": 88,
        "speed": 90,
        "strength": 75,
        "agility": 95,
        "flexibility": 85
      },
      "heightInCm": 170,
      "weightInKg": 72,
      "health": "Excelente",
      "technicalSkills": {
        "ballControl": 99,
        "passing": 94,
        "shooting": 96,
        "dribbling": 98,
        "marking": 40
      },
      "tacticalSkills": {
        "positioning": 97,
        "gameVision": 95,
        "tacticalIntelligence": 90,
        "teamwork": 95
      },
      "mentalAttributes": {
        "concentration": 95,
        "resilience": 92,
        "discipline": 90,
        "leadership": 88
      },
      "experience": 98,
      "age": 37,
      "nationality": "Argentina",
      "injuryHistory": "Lesões leves no tornozelo",
      "reputation": "Lenda viva"
    },
    {
      "id": 6,
      "name": "Ronaldinho Gaúcho",
      "position": "Meia-atacante",
      "height": 1.82,
      "pastTeams": ["Grêmio", "Paris Saint-Germain", "Barcelona", "Milan", "Flamengo", "Atlético Mineiro", "Querétaro", "Fluminense"],
      "currentTeam": "Aposentado",
      "titlesPerClub": { "Barcelona": 5, "Milan": 2, "Atlético Mineiro": 2 },
      "leagueId": 0,
      "photo": "/assets/images/ronaldinho.jpg",
      "physicalConditioning": {
        "resistance": 85,
        "speed": 87,
        "strength": 80,
        "agility": 99,
        "flexibility": 85
      },
      "heightInCm": 182,
      "weightInKg": 80,
      "health": "Boa",
      "technicalSkills": {
        "ballControl": 99,
        "passing": 92,
        "shooting": 90,
        "dribbling": 99,
        "marking": 35
      },
      "tacticalSkills": {
        "positioning": 88,
        "gameVision": 96,
        "tacticalIntelligence": 89,
        "teamwork": 85
      },
      "mentalAttributes": {
        "concentration": 90,
        "resilience": 85,
        "discipline": 80,
        "leadership": 87
      },
      "experience": 97,
      "age": 44,
      "nationality": "Brasil",
      "injuryHistory": "Lesões leves no joelho",
      "reputation": "Lenda do futebol arte"
    },

    {
      "id": 7,
      "name": "Romário",
      "position": "Atacante",
      "height": 1.67,
      "pastTeams": ["Vasco da Gama", "PSV Eindhoven", "Barcelona", "Flamengo", "Valencia"],
      "currentTeam": "Aposentado",
      "titlesPerClub": { "PSV Eindhoven": 3, "Barcelona": 2 },
      "leagueId": 0,
      "photo": "/assets/images/romario.jpg",
      "physicalConditioning": {
        "resistance": 82,
        "speed": 85,
        "strength": 70,
        "agility": 92,
        "flexibility": 80
      },
      "heightInCm": 167,
      "weightInKg": 72,
      "health": "Boa",
      "technicalSkills": {
        "ballControl": 94,
        "passing": 85,
        "shooting": 98,
        "dribbling": 92,
        "marking": 30
      },
      "tacticalSkills": {
        "positioning": 97,
        "gameVision": 85,
        "tacticalIntelligence": 88,
        "teamwork": 80
      },
      "mentalAttributes": {
        "concentration": 90,
        "resilience": 85,
        "discipline": 80,
        "leadership": 85
      },
      "experience": 95,
      "age": 58,
      "nationality": "Brasil",
      "injuryHistory": "Poucas lesões graves",
      "reputation": "Lenda do gol"
    },

    {
      "id": 8,
      "name": "Arjen Robben",
      "position": "Meia-atacante",
      "height": 1.80,
      "pastTeams": ["Groningen", "PSV Eindhoven", "Chelsea", "Real Madrid", "Bayern de Munique"],
      "currentTeam": "Aposentado",
      "titlesPerClub": { "PSV Eindhoven": 1, "Chelsea": 2, "Real Madrid": 1, "Bayern de Munique": 20 },
      "leagueId": 0,
      "photo": "/assets/images/arjen_robben.jpg",
      "physicalConditioning": {
        "resistance": 85,
        "speed": 92,
        "strength": 75,
        "agility": 90,
        "flexibility": 80
      },
      "heightInCm": 180,
      "weightInKg": 80,
      "health": "Boa",
      "technicalSkills": {
        "ballControl": 90,
        "passing": 85,
        "shooting": 90,
        "dribbling": 92,
        "marking": 40
      },
      "tacticalSkills": {
        "positioning": 90,
        "gameVision": 85,
        "tacticalIntelligence": 87,
        "teamwork": 88
      },
      "mentalAttributes": {
        "concentration": 92,
        "resilience": 85,
        "discipline": 88,
        "leadership": 82
      },
      "experience": 95,
      "age": 40,
      "nationality": "Holanda",
      "injuryHistory": "Lesões recorrentes musculares",
      "reputation": "Ícone do Bayern"
    },
    {
      "id": 9,
      "name": "Robert Lewandowski",
      "position": "Atacante",
      "height": 1.85,
      "pastTeams": ["Znicz Pruszków", "Lech Poznań", "Borussia Dortmund", "Bayern de Munique"],
      "currentTeam": "Barcelona",
      "titlesPerClub": { "Borussia Dortmund": 2, "Bayern de Munique": 19 },
      "leagueId": 1,
      "photo": "/assets/images/lewandowski.jpg",
      "physicalConditioning": {
        "resistance": 90,
        "speed": 85,
        "strength": 88,
        "agility": 86,
        "flexibility": 82
      },
      "heightInCm": 185,
      "weightInKg": 81,
      "health": "Excelente",
      "technicalSkills": {
        "ballControl": 92,
        "passing": 85,
        "shooting": 98,
        "dribbling": 85,
        "marking": 45
      },
      "tacticalSkills": {
        "positioning": 97,
        "gameVision": 89,
        "tacticalIntelligence": 90,
        "teamwork": 88
      },
      "mentalAttributes": {
        "concentration": 95,
        "resilience": 90,
        "discipline": 95,
        "leadership": 85
      },
      "experience": 96,
      "age": 35,
      "nationality": "Polônia",
      "injuryHistory": "Poucas lesões graves",
      "reputation": "Craque mundial"
    },


    



  ];

  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getPlayerById(id: number): Observable<Player | undefined> {
    return of(this.players.find(p => p.id === id));
  }

  getPlayerByName(name: string): Observable<Player | undefined> {
    return of(this.players.find(player => player.name === name));
  }

    constructor(private leagueService: LeagueService) {}
  
    getLeagues(): Observable<League[]> {
      return this.leagueService.getLeagues();
    }



    

}
