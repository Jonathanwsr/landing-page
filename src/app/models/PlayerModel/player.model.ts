export interface Player {
  id: number;
  name: string;
  position: string;
  height: number;
  pastTeams: string[];
  currentTeam: string;
  titlesPerClub: { [club: string]: number };
  leagueId: number;
  photo: string;
 
  physicalConditioning: {
    resistance: number;
    speed: number;
    strength: number;
    agility: number;
    flexibility: number;
  };
  heightInCm: number; 
  weightInKg: number; 
  health: string; 

  technicalSkills: {
    ballControl: number;
    passing: number;
    shooting: number;
    dribbling: number;
    marking: number;
  };

  tacticalSkills: {
    positioning: number;
    gameVision: number;
    tacticalIntelligence: number;
    teamwork: number;
  };

  mentalAttributes: {
    concentration: number;
    resilience: number;
    discipline: number;
    leadership: number;
  };
 
  experience: number; 
  age: number;
  nationality: string;
  injuryHistory: string;
  reputation: string;
}