export interface League {
    id: number;
    name: string;
    teams: string[];
    totalTeams: number;
    points: { [team: string]: number };
    Divisions: string[];
    Regulatorybody: string[]
    Awards: number[];
    Countries: string;
    photo: string;
    
  }
  