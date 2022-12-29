import { Player } from './../../player/models/player';

export interface Team {
  id?: any;
  league: number;
  cityName: string;
  name: string;
  city: string;
  state: string;
  conference: string;
  division: string;
  teamRating: number;
  championships: number;
  playoffs: number;
  totalSalary: number;
  numPlayers: number;
  oldWinRating: number;
  streak: number;
  homeWins: number;
  homeLosses: number;
  roadWins: number;
  roadLosses: number;
  win_: number;
  totalWins: number;
  totalLosses: number;
  playoffWins: number;
  playoffLosses: number;
  finalsAppearances: number;
  points: number;
  allowedPoints: number;
  steals: number;
  allowedSteals: number;
  rebounds: number;
  allowedRebounds: number;
  assists: number;
  allowedAssists: number;
  blocks: number;
  allowedBlocks: number;
  turnovers: number;
  allowedTurnovers: number;
  fga: number;
  fgm: number;
  allowedFga: number;
  allowedFgm: number;
  _3pa: number;
  _3pm: number;
  allowed3pa: number;
  allowed3pm: number;
  ftm: number;
  fta: number;
  allowedFtm: number;
  allowedFta: number;
  lastPlayoffYear: number;
  isHuman: true;
  cutSalary: number;
  cutSalary2: number;
  cutSalary3: number;
  cutSalary4: number;
  cutSalary5: number;
  cutSalary6: number;
  cutSalary7: number;
  cutSalary8: number;
  usedMidException: number;
  usedLowException: number;
  gb: number;
  confGb: number;
  divRank: number;
  confRank: number;
  arenaName: string;
  ppg: number;
  oppg: number;
  rpg: number;
  apg: number;
  strk: string;
  players?: Player[];
  picks: any[];
}
